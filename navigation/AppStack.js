import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from '../screens/Posts';
const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Posts'
        component={Posts}
        options={{ header: () => false }}
      />
    </Stack.Navigator>
  );
}
