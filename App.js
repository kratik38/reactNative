import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,View } from 'react-native';
import Home from './Components/Home';
import Splash from './Components/Splash';
import { NavigationContainer,NavigationAction } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const MyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home} 
        />
        <Stack.Screen
         name="Splash"
         component={Splash}
         />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});