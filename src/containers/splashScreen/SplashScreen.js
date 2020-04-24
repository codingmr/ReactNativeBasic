import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Layout, Colors } from '../../theme';

import SplashAnimation from '../../components/SplashAnimation';

const SplashScreen = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.cgRed} />
      <SafeAreaView style={[Layout.fill, Layout.center]}>
        <SplashAnimation />
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
