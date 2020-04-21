import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class SplashAnimation extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={(animation) => {
          this.animation = animation;
        }}
        source={require('./assets/animations/smartsharp2.json')}
        style={styles.splashAnimation}
      />
    );
  }
}

const styles = StyleSheet.create({
  splashAnimation: {},
});
