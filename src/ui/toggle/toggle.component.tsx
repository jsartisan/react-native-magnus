import * as React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState, useContext } from 'react';

import { getStyle } from './toggle.style';
import { ThemeContext, getThemeProperty } from '../../theme';

import { ToggleProps } from './toggle.type';

function Toggle(props: ToggleProps): React.ReactElement {
  const {
    h,
    w,
    bg,
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
                getThemeProperty(theme.colors, bg, 'white'),
                getThemeProperty(theme.colors, activeBg, 'white'),
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
                  getThemeProperty(theme.colors, circleBg, 'white'),
                  getThemeProperty(theme.colors, activeCircleBg, 'white'),
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
}

Toggle.defaultProps = {
  w: 40,
  h: 20,
  onPress: (): void => {},
  activeBg: 'green600',
  bg: 'gray200',
  on: false,
  circleBg: 'white',
  activeCircleBg: 'rgb(102,134,205)',
  duration: 300,
  rounded: 'circle',
  disabled: false,
};

export { Toggle };
