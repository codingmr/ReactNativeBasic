import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import { Layout } from '../../theme';

const HomeScreen = () => {
  return (
    <>
      <StatusBar hidden={false} barStyle="default" />
      <SafeAreaView style={Layout.fill}>
        <View style={[Layout.fill, Layout.center]}>
          <Text>Home Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
