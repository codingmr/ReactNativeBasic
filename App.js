import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.backgroundLayer}>
        <View style={styles.centerMsg}>
          <Text>Hello there</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const COLOURS = {
  red: '#F44336',
  black: '#000',
};

const styles = StyleSheet.create({
  backgroundLayer: {
    flex: 1,
  },
  centerMsg: {
    alignItems: 'center',
    backgroundColor: COLOURS.red,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
