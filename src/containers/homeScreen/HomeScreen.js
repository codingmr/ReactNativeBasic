import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Layout } from '../../theme';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <StatusBar hidden={false} barStyle="default" />
      <SafeAreaView style={Layout.fill}>
        <View style={[Layout.fill, Layout.center]}>
          <Text>Home Screen</Text>
          <TouchableOpacity
            onPress={() => navigate('About', { data: 'Pizza x3 🍕🍕🍕' })}
          >
            <Text>Go to Details Screen</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
export default HomeScreen;
