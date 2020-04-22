import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../containers/splashScreen/SplashScreen';
import HomeScreen from '../containers/homeScreen/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'The Home Screen' }}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ header: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
