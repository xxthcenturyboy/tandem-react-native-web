import { Easing, Animated } from 'react-native';

const otherTransition = (index: number, position: any, layout: any) => {
  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  });

  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.99, index],
    outputRange: [0, 1, 1],
  });

  return { opacity, transform: [{ translateY }] };
};

const TransitionConfiguration2 = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: (sceneProps: any) => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return specialTransition(index, position);
    },
  }
};

const specialTransition = (index: number, position: any) => {
  const inputRange = [index - 1, index, index + 1];
  const outputRange = [0, 1, 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange
  });

  const scaleX = position.interpolate({
    inputRange,
    outputRange
  });

  return {
    opacity,
    transform: [
      { scaleX }
    ]
  };
};

export default () => {
  return {
    screenInterpolator: (screenProps: any) => {
      const { position, scene } = screenProps;
      const { index } = scene;

      return specialTransition(index, position);
    }
  };
}

