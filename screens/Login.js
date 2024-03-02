import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import color from '../constants/colors';
import { useContext, useState } from 'react';
import baseUrl from '../constants/baseUrl';
import axios from '../api/axios';
import NextPrevButton from '../components/NextPrevButton';
import Button from '../components/Button';
import colors from '../constants/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../contexts/AuthProvider';

export default function Login({ navigation }) {
  // const [loginLevel, setLoginLevel] = useState([0]);
  const {
    login,
    loginLevel,
    verifyPin,
    email,
    setEmail,
    password,
    setPassword,
    password1,
    setPassword1,
    pin,
    setPin,
    setLoginLevel,
    checkUser,
  } = useContext(AuthContext);

  const precessLogin = async () => {
    let url = '';
    let payload = {};
    setLoading(true);

    if (loginLevel.at(-1) === 0) {
      // returns loginLevel 1 or 2
      url = baseUrl + '/auth/check-user';
      payload = {
        email,
      };
    }
    if (loginLevel.at(-1) === 1) {
      // returns loginLevel 2
      url = baseUrl + '/auth/set-password';
      payload = {
        email,
        password,
      };
    }
    if (loginLevel.at(-1) === 2) {
      // returns loginLevel 3
      url = baseUrl + '/auth/login';
      payload = {
        email,
        password,
      };
    }
    if (loginLevel.at(-1) === 3) {
      // resurns loginLevel 4, thus accessToken refreshToken
      url = baseUrl + '/auth/verify-pin';
      payload = {
        email,
        pin,
      };
    }
    sendData(url, payload);
  };

  const sendData = async (url, payload) => {
    try {
      const res = await axios.post(url, payload);
      console.log('res', res);
      if (res.data.loginLevel === 4) {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        // AsyncStorage.setItem('acessToken', res.data.acessToken);
        // AsyncStorage.setItem('refreshToken', res.data.refreshToken);
        // setAuth((val) => {
        //   return { ...val, accessToken, refreshToken };
        // });
        // navigation.navigate('Posts');
      }
      alert(res.data.message);
      setLoginLevel((val) => [...val, res.data.loginLevel]);
    } catch (error) {
      alert(error?.response?.data?.error?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(loginLevel);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      {/* <Text>{state1.steps.map((e) => e).join(' ')}</Text>
      <NextPrevButton
        type='right'
        backgroundColor={color.primary}
        onPress={() => dispatch1({ type: '+' })}
      /> */}
      {loginLevel && loginLevel.at(-1) === 0 && (
        <>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(val) => setEmail(val)}
            placeholder='Email'
            cursorColor={color.secondary}
            inputMode='email'
          />
          <NextPrevButton
            type='right'
            backgroundColor={color.primary}
            onPress={() => checkUser(email)}
          />
        </>
      )}
      {loginLevel && loginLevel.at(-1) === 1 && (
        <>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder='Set Password'
            cursorColor={color.secondary}
          />
          <TextInput
            style={styles.input}
            value={password1}
            onChangeText={(val) => setPassword1(val)}
            placeholder='Confirm Password'
            cursorColor={color.secondary}
          />
          <NextPrevButton
            type='right'
            backgroundColor={color.primary}
            onPress={() => login(email, password, 'set_password')}
          />
        </>
      )}
      {loginLevel && loginLevel.at(-1) === 2 && (
        <>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder='Enter Password'
            cursorColor={color.secondary}
          />
          <NextPrevButton
            type='right'
            backgroundColor={color.primary}
            onPress={() => login(email, password)}
          />
        </>
      )}
      {loginLevel && loginLevel.at(-1) === 3 && (
        <>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={(val) => setPin(val)}
            placeholder='Verify Pin'
            cursorColor={color.secondary}
            inputMode='numeric'
          />
          <Button
            title='Resend Email'
            onPress={async () => {
              url = baseUrl + '/auth/login';
              payload = {
                email,
                password,
              };
              await sendData(url, payload);
              alert('Pin sent. Please check email.');
            }}
          />

          <NextPrevButton
            type='right'
            backgroundColor={color.primary}
            onPress={() => verifyPin(email, pin)}
          />
        </>
      )}

      {/* we were here */}

      {/* <NextPrevButton
        type='right'
        backgroundColor={color.primary}
        onPress={precessLogin}
      /> */}
      {/* <NextPrevButton
        type='right'
        backgroundColor={color.primary}
        onPress={login}
      /> */}
      <NextPrevButton
        type='left'
        backgroundColor={color.grey}
        onPress={() => {
          if (loginLevel.length > 1) setLoginLevel((val) => val.slice(0, -1));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
  logo: {
    height: 105,
    width: 120,
  },
  input: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: 100,
    width: '70%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
