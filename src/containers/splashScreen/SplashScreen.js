import React, { useRef } from 'react';
import { Animated, StatusBar, SafeAreaView, View } from 'react-native';
import { Layout } from '../../theme';

import SplashAnimation from '../../components/SplashAnimation';

const SplashScreen = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={Layout.fill}>
          <View style={[Layout.fill, Layout.center]}>
            <SplashAnimation />
          </View>
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
