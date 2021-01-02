import * as React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState, useContext } from 'react';

import { getStyle } from './toggle.style';
import { ToggleProps } from './toggle.type';
import { ThemeContext, getThemeProperty } from '../../theme';

const Toggle: React.FC<ToggleProps> = (props) => {
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
  const { theme } = useContext(ThemeContext);
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
                getThemeProperty(theme.colors, bg),
                getThemeProperty(theme.colors, activeBg),
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
                  getThemeProperty(theme.colors, circleBg),
                  getThemeProperty(theme.colors, activeCircleBg),
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

Toggle.defaultProps = {
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
};

export { Toggle };
