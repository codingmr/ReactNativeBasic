import 'react-native-gesture-handler';
import React from 'react';
import PropTypes from 'prop-types';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../containers/homeScreen/HomeScreen';
import AboutScreen from '../containers/aboutScreen/AboutScreen';

import { Colors } from '../theme';
import TabBarIcon from '../components/TabBarIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const HomeNavigator = ({ route, component, params = {}, tabBarIconName }) => {
  HomeNavigator.propTypes = {
    route: PropTypes.object.isRequired,
    component: PropTypes.func,
    params: PropTypes.object,
    tabBarIconName: PropTypes.string,
  };
  const HomeScreenTabBarIcon = ({ focused, size }) => (
    <TabBarIcon focused={focused} size={size} name="md-home" />
  );
  HomeScreenTabBarIcon.propTypes = {
    focused: PropTypes.boolean,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  const AboutScreenTabBarIcon = ({ focused, size }) => (
    <TabBarIcon focused={focused} size={size} name="md-information" />
  );
  AboutScreenTabBarIcon.propTypes = {
    focused: PropTypes.boolean,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  const MockedTabBarIcon = ({ focused, size }) => (
    <TabBarIcon focused={focused} size={size} name={tabBarIconName} />
  );
  MockedTabBarIcon.propTypes = {
    focused: PropTypes.boolean,
    color: PropTypes.string,
    size: PropTypes.number,
  };

  // independent navigation container to prevent going back to the splash screen
  // mocking screen navigation for jest tests
  // only renders mock screen when a component is given from screens-test.js
  return (
    <NavigationContainer independent={true}>
      <BottomTab.Navigator
        initialRouteName={INITIAL_ROUTE_NAME}
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.inactive,
        }}
      >
        {component === undefined ? (
          <BottomTab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: HomeScreenTabBarIcon,
            }}
          />
        ) : (
          <BottomTab.Screen
            name="MockedScreen"
            component={component}
            initialParams={params}
            options={{
              tabBarIcon: MockedTabBarIcon,
            }}
          />
        )}
        <BottomTab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: AboutScreenTabBarIcon,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
