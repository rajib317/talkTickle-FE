import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import AuthProvider from '../contexts/AuthProvider';
import Icon from 'react-native-vector-icons/Entypo';

export default function LogoutButton({ style, color, size }) {
  const { logout } = useContext(AuthProvider);
  return (
    <Pressable style={{ ...style }} onPress={logout}>
      <Icon style={{ color: color || 'black' }} name='log-out' size={size} />
      <Text>Logout</Text>
    </Pressable>
  );
}
