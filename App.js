import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import { SecureStore } from 'expo';
import Splash from './screens/Splash';
import Posts from './screens/Posts';
import Login from './screens/Login';
import CreatePost from './screens/CreatePost';
import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext, { AuthProvider } from './contexts/AuthProvider';
import AppNav from './navigation/AppNav';
export default function () {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <StatusBar backgroundColor='white' barStyle='dark-content' />
          <AppNav />
        </View>
      </SafeAreaView>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
