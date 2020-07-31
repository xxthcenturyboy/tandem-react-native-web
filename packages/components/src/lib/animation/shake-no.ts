import { Animated, Easing } from 'react-native';

const shakeAnim = new Animated.Value(0.5);

const config = shakeAnim.interpolate({
  inputRange: [0, 1],
  outputRange: [-40, 40],
});

const shake = () => {
  Animated.timing(
    shakeAnim,
    {
      toValue: 0.3,
      duration: 100,
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.7,
      duration: 100
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0,
      duration: 75,
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 1,
      duration: 75
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.2,
      duration: 75,
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.8,
      duration: 75
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.3,
      duration: 100,
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.7,
      duration: 100,
    }
  ).start(() => Animated.timing(
    shakeAnim,
    {
      toValue: 0.5,
      duration: 100,
      easing: Easing.back(0.1)
    }
  ).start()))))))));
}

export default {
  config,
  shake
};
