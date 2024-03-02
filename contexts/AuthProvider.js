import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';
import axios from '../api/axios';
import { jwtDecode } from 'jwt-decode';

import { decode } from 'base-64';

global.atob = decode;
const storageKey = 'volare';
const storageSequence = [0, 1, 3, 4, 2, 5];
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loginLevel, setLoginLevel] = useState([0]);

  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const checkUser = async (username) => {
    try {
      setIsLoading(true);
      const res = await axios.post('/auth/check-user', { email: username });
      setLoginLevel((val) => [...val, res.data.loginLevel]);
    } catch (error) {
      alert(error.response.data.error.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const login = async (email, password, setPassword = '') => {
    try {
      setIsLoading(true);
      const url =
        setPassword === 'set_password' ? '/auth/set-password' : '/auth/login';
      const res = await axios.post(url, { email, password });
      setLoginLevel((val) => [...val, res.data.loginLevel]);
    } catch (error) {
      alert(error.response.data.error.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const storeTokens = (accessToken, refreshToken) => {
    const fragments = (accessToken + '.' + refreshToken).split('.');

    AsyncStorage.setItem(
      storageKey,
      storageSequence.map((s) => fragments[s]).join('.')
    );
  };

  const verifyPin = async (email, pin) => {
    try {
      setIsLoading(true);
      const res = await axios.post('/auth/verify-pin', { email, pin });
      setLoginLevel((val) => [...val, res.data.loginLevel]);
      storeTokens(res.data.accessToken, res.data.refreshToken);
      setAccessToken(res.data.accessToken);
    } catch (error) {
      alert(error.response.data.error.message || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    setAccessToken(null);
    AsyncStorage.removeItem(storageKey);
    setIsLoading(false);
  };

  function isTokenExpired(token) {
    const decoded = jwtDecode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else {
      return false;
    }
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const fragments = (await AsyncStorage.getItem(storageKey)).split('.');
      let accessToken = [fragments[0], fragments[1], fragments[4]].join('.');
      const refreshToken = [fragments[2], fragments[3], fragments[5]].join('.');

      if (isTokenExpired(accessToken)) {
        // Call Refresh token To get a new access token
        console.log('Refreshing Tokens');
        const res = await axios.post('/auth/refresh-token', { refreshToken });
        storeTokens(res.data.accessToken, res.data.refreshToken);
      }
      if (isTokenExpired(refreshToken)) {
        logout();
      }
      // show the Auth Required Pages
      setAccessToken(accessToken);
    } catch (error) {
      console.log(`isLoogedIn error ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        checkUser,
        login,
        verifyPin,
        logout,
        isLoading,
        accessToken,
        loginLevel,
        email,
        setEmail,
        password,
        setPassword,
        password1,
        setPassword1,
        pin,
        setPin,
        setLoginLevel,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
