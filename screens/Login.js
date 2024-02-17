import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import color from '../constants/colors';
import { useState } from 'react';
import baseUrl from '../constants/baseUrl';
import axios from 'axios';
import NextPrevButton from '../components/NextPrevButton';
import Button from '../components/Button';
import colors from '../constants/colors';
export default function Login() {
  const [loginLevel, setLoginLevel] = useState([0]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const precessLogin = async () => {
    console.log(loginLevel);
    let url = '';
    let payload = {};
    setLoading(true);
    if (loginLevel.at(-1) === 0) {
      url = baseUrl + '/auth/login';
      payload = {
        email,
      };
    }
    if (loginLevel.at(-1) === 1) {
      url = baseUrl + '/auth/set-password';
      payload = {
        email,
        password,
      };
    }
    if (loginLevel.at(-1) === 2) {
      url = baseUrl + '/auth/verify-pin';
      payload = {
        email,
        pin,
      };
    }
    try {
      const res = await axios.post(url, payload);
      setLoginLevel((val) => [...val, res.data.loginLevel]);
      alert(res.data.message);
    } catch (error) {
      if (axios.isAxiosError(error))
        return alert(error.response.data.error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/icon.png')} />
      <Text>{loginLevel}</Text>
      {loginLevel.at(-1) === 0 && (
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(val) => setEmail(val)}
          placeholder='Email'
          cursorColor={color.secondary}
          inputMode='email'
        />
      )}
      {loginLevel.at(-1) === 1 && (
        <View>
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
        </View>
      )}
      {loginLevel.at(-1) === 2 && (
        <>
          <TextInput
            style={styles.input}
            value={pin}
            onChangeText={(val) => setPin(val)}
            placeholder='Verify Pin'
            cursorColor={color.secondary}
            inputMode='numeric'
            loading={loading}
          />
        </>
      )}

      <NextPrevButton
        type='right'
        backgroundColor={color.primary}
        onPress={precessLogin}
      />
      {loginLevel.at(-1) !== 3 && loginLevel.at(-1) !== 0 && (
        <NextPrevButton
          type='left'
          backgroundColor={color.grey}
          onPress={async () => {
            if (loginLevel.length > 1) setLoginLevel((val) => val.slice(0, -1));
          }}
        />
      )}
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
