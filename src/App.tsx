/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import Toast from 'react-native-toast-message';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  login: undefined,
  forgotPassword: undefined
  homeScreen: undefined
}

function App(): React.JSX.Element {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <Toast/>
    </>
  );
}


export default App;
