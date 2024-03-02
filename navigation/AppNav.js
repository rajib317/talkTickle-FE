import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from '../contexts/AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { ActivityIndicator, View } from 'react-native';

export default function AppNav() {
  const { isLoading, accessToken } = useContext(AuthProvider);
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {accessToken !== null ? <AppStack /> : <AuthStack />}

      {/* <Splash /> */}
      {/* <Posts /> */}
      {/* <Login /> */}
      {/* <CreatePost /> */}
    </NavigationContainer>
  );
}
