import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

import { Colors } from './theme'

import SplashAnimation from './components/SplashAnimation';

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

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
  },
  centerMsg: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
