import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import SplashAnimation from './SplashAnimation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.backgroundLayer}>
        <View style={styles.centerMsg}>
          <SplashAnimation />
        </View>
      </SafeAreaView>
    </>
  );
};

const COLOURS = {
  red: '#F44336',
  black: '#000',
  white: '#fff',
};

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
  },
  centerMsg: {
    alignItems: 'center',
    backgroundColor: COLOURS.white,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
