import React from 'react';
import { StatusBar, SafeAreaView, View, Text } from 'react-native';
import {useRoute} from '@react-navigation/native';
import { Layout } from '../../theme';

const AboutScreen = () => {
  const {params} = useRoute();
  const {data} = params || {};

  return (
    <>
      <StatusBar hidden={false} barStyle="default" />
      <SafeAreaView style={Layout.fill}>
        <View style={[Layout.fill, Layout.center]}>
          <Text>About Screen</Text>
          <Text>Data passed: {data}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
