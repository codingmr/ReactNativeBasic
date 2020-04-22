import React from 'react';
import { HomeScreen, AboutScreen, SplashScreen } from '../../containers';
import { cleanup, render } from 'react-native-testing-library';

describe('Snapshot testing of screens', () => {
  afterEach(cleanup); //Unmounts React trees that were mounted with render to prevent memory leak.
  it('HomeScreen: should render correctly', () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('AboutScreen: should render correctly', () => {
    const { toJSON } = render(<AboutScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
  it('SplashScreen: should render correctly', () => {
    const { toJSON } = render(<SplashScreen />);
    expect(toJSON()).toMatchSnapshot();
  });
});
