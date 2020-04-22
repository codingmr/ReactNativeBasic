import React from 'react';
import LottieView from 'lottie-react-native';

import { Animations } from '../theme';

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
        source={Animations.smartSharp}
      />
    );
  }
}
