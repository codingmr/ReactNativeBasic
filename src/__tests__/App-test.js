import 'react-native';
import React from 'react';
import SplashScreen from '../containers/splashScreen/SplashScreen';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SplashScreen />
    )
});
