import * as React from 'react';
import {
  ImageBackground as RNImageBackground,
  View as RNView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { AnimatedProps } from './animated.type';
import { useTheme } from '../../theme';
import { getStyle } from './animated.style';
import { registerAnimations } from './animated.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';

registerAnimations();

const Animated: React.FunctionComponent<AnimatedProps> = (incomingProps) => {
  const props = useDefaultProps('Animated', incomingProps, {
    bg: 'transparent',
    flexWrap: 'nowrap',
    rounded: 'none',
    shadow: 'none',
    shadowColor: 'gray900',
    position: 'relative',
    bgMode: 'cover',
    animation: 'fromTop',
    duration: 150,
    delay: 0,
  });

  const {
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    position,
    style,
    flexDir,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    bgImg,
    duration,
    bgMode,
    animation,
    alignItems,
    justifyContent,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    flexWrap,
    shadow,
    shadowColor,
    delay,
    ...rest
  } = props;

  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  if (bgImg) {
    return (
      <Animatable.View
        animation={`magnus-${animation}`}
        duration={duration}
        easing="ease-in-out"
        iterationCount={1}
      >
        <RNImageBackground
          source={bgImg}
          style={computedStyle.div}
          resizeMode={props.bgMode}
          imageStyle={computedStyle.image}
          {...rest}
        >
          {children}
        </RNImageBackground>
      </Animatable.View>
    );
  }

  return (
    <Animatable.View
      animation={`magnus-${animation}`}
      duration={duration}
      easing="ease-in-out"
      iterationCount={1}
      delay={delay}
    >
      <RNView style={{ ...computedStyle.div }} {...rest}>
        {children}
      </RNView>
    </Animatable.View>
  );
};

// Animated.defaultProps = {
//   bg: 'transparent',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   animation: 'fromTop',
//   duration: 150,
//   delay: 0,
// };

export { Animated };
