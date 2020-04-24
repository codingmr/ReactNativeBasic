import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

import { Animations, Colors } from '../theme';

const SplashAnimation = () => {
  React.useEffect(() => {
    _asyncWaitThenPlay();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const _asyncWaitThenPlay = async () => {
    await delay();
    this.animation.play();
  };

  const delay = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 330);
    });

  return (
    <LottieView
      ref={(animation) => {
        this.animation = animation;
      }}
      source={Animations.coffeeMeditation}
      style={styles.lottieAnimation}
    />
  );
};

const styles = StyleSheet.create({
  lottieAnimation: {
    backgroundColor: Colors.cgRed,
  },
});

export default SplashAnimation;
