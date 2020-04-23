import React from 'react';
import { HomeScreen, AboutScreen, SplashScreen } from '../../containers';
import HomeNavigator from '../../navigation/HomeNavigator';
import { cleanup, render } from 'react-native-testing-library';

describe('Snapshot testing of screens', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.
  it('HomeScreen: should render correctly', () => {
    const { toJSON } = render(
      <HomeNavigator
        route={{ name: 'Home' }}
        component={HomeScreen}
        tabBarIconName={'md-home'}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('AboutScreen: should render correctly', () => {
    const { toJSON } = render(
      <HomeNavigator
        route={{ name: 'About' }}
        component={AboutScreen}
        tabBarIconName={'md-information'}
        params={{ data: 'Fake data' }}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it('SplashScreen: should render correctly', () => {
    const { toJSON } = render(<SplashScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
