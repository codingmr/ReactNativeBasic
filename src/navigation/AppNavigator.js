import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../containers/splashScreen/SplashScreen';
import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

const SPLASH_SCREEN_LENGTH = 2000;

const AppNavigator = () => {
  const [isSplashFinished, setSplashedFinished] = React.useState(false);
  const [isResourcesLoaded, setResourcesLoaded] = React.useState(false);

  React.useEffect(() => {
    _asyncSplashScreen();

    try {
      _asyncLoadResources();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const _asyncSplashScreen = async () => {
    await splashToFinish();
    setSplashedFinished(true);
  };

  const _asyncLoadResources = async () => {
    const response = await loadResources();
    if (response === 1) {
      setResourcesLoaded(true);
    }
  };

  const splashToFinish = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, SPLASH_SCREEN_LENGTH);
    });

  const loadResources = () => {
    // load app resources here
    /* Fake resource load timer
      new Promise((resolve, reject) => {
        const FIVE_SECONDS = 5000;
        setTimeout(() => {
          resolve(1);
        }, FIVE_SECONDS);
      });
      */
      return 1;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {isSplashFinished && isResourcesLoaded ? (
          <Stack.Screen
            name="Home"
            component={HomeNavigator}
            options={ {headerShown: false} }
          />
        ) : (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
