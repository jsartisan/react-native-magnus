import { Animated, ViewStyle } from 'react-native';

export const mutableStyles = {
  container: (
    height: Animated.AnimatedInterpolation
  ): Animated.WithAnimatedObject<ViewStyle> => ({
    height,
    overflow: 'hidden',
  }),
};
