import * as React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';

import { getStyle } from './toggle.style';
import { ToggleProps } from './toggle.type';
import { useTheme } from '../../theme';
import { getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Toggle: React.FC<ToggleProps> = (incomingProps) => {
  const props = useDefaultProps('Toggle', incomingProps, {
    w: 55,
    h: 30,
    onPress: (): void => {},
    activeBg: 'green600',
    bg: 'gray400',
    on: false,
    circleBg: 'white',
    activeCircleBg: 'white',
    duration: 300,
    rounded: 'circle',
    disabled: false,
  });

  const {
    h,
    w,
    bg,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    disabled,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
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
    borderEndWidth,
    onPress,
    activeBg,
    circleBg,
    activeCircleBg,
    duration,
    on,
    ...rest
  } = props;
  const [animXValue] = useState(new Animated.Value(on ? 1 : 0));
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  const endPos = (w as number) - (h as number) + 3;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = useState(3);

  const prevSwitchOnRef = useRef<boolean>();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  /**
   *
   */
  useEffect(() => {
    const runAnimation = (): void => {
      const animValue = {
        fromValue: on ? 0 : 1,
        toValue: on ? 1 : 0,
        duration,
        useNativeDriver: false,
      };
      Animated.timing(animXValue, animValue).start();
    };

    prevSwitchOnRef.current = on;
    if (prevSwitchOn !== on) {
      runAnimation();
    }
  }, [animXValue, prevSwitchOn, on, duration]);

  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : () => {}}
      activeOpacity={0.5}
      {...rest}
    >
      <Animated.View
        style={[
          computedStyle.container,
          {
            backgroundColor: animXValue.interpolate({
              inputRange: [0, 1],
              outputRange: [
                getThemeColor(theme.colors, bg),
                getThemeColor(theme.colors, activeBg),
              ],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            computedStyle.circle,
            {
              backgroundColor: animXValue.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  getThemeColor(theme.colors, circleBg),
                  getThemeColor(theme.colors, activeCircleBg),
                ],
              }),
            },
            {
              transform: [
                {
                  translateX: animXValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      circlePosXStart as string | number,
                      circlePosXEnd as string | number,
                    ] as string[] | number[],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

// Toggle.defaultProps = {
//   w: 55,
//   h: 30,
//   onPress: (): void => {},
//   activeBg: 'green600',
//   bg: 'gray400',
//   on: false,
//   circleBg: 'white',
//   activeCircleBg: 'white',
//   duration: 300,
//   rounded: 'circle',
//   disabled: false,
// };

export { Toggle };
