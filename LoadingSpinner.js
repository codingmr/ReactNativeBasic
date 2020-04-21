import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class LoadingSpinner extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <LottieView
        ref={(animation) => {
          this.animation = animation;
        }}
        source={require('./assets/animations/hexagon-spinner.json')}
        style={styles.loadingSpinner}
      />
    );
  }
}

const styles = StyleSheet.create({
  loadingSpinner: {},
});
