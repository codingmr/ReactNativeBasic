import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import { Layout } from '../../theme';

const AboutScreen = () => {
  return (
    <>
      <StatusBar hidden={false} barStyle="default" />
      <SafeAreaView style={Layout.fill}>
        <View style={[Layout.fill, Layout.center]}>
          <Text>About Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
