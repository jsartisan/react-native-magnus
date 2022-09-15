import * as React from 'react';
import { useState, useEffect } from 'react';
import { Animated, SafeAreaView, View as RNView } from 'react-native';

import { getStyle } from './snackbar.style';
import { useTheme } from '../../theme';
import { SnackbarProps } from './snackbar.type';
import { Text } from '../text/text.component';
import { getSpecificProps } from '../../utilities';
import { textProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Toast: React.FunctionComponent<SnackbarProps> = (incomingProps) => {
  const props = useDefaultProps('Snackbar', incomingProps, {
    bg: 'gray900',
    color: 'white',
    p: 'lg',
    m: 'md',
    rounded: 'md',
    fontSize: 'md',
    duration: 4000,
    onClose: () => {},
    shadow: 2,
    shadowColor: 'gray500',
    flexDir: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    useNativeDriver: false,
  });

  const {
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
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    onClose,
    duration,
    suffix,
    prefix,
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
    flexDir,
    style,
    justifyContent,
    alignItems,
    alignSelf,
    shadow,
    shadowColor,
    opacity: opacityProp,
    useNativeDriver,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);
  const [opacity] = useState(new Animated.Value(0.0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 250,
    }).start();

    let closeTimeout: number = 0;

    if (duration !== 0 && typeof duration === 'number') {
      closeTimeout = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          useNativeDriver: true,
          duration: 250,
        }).start(({ finished }) => {
          if (finished) {
            onClose();
          }
        });
      }, duration);
    }

    return () => {
      closeTimeout && clearTimeout(closeTimeout);
    };
  }, [duration, onClose, opacity]);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          {...getSpecificProps(props, ...textProps)}
          style={computedStyle.text}
        >
          {children}
        </Text>
      );
    }

    return children;
  };

  return (
    <SafeAreaView pointerEvents="box-none" style={computedStyle.wrapper}>
      <Animated.View
        style={{
          opacity,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        }}
        {...rest}
      >
        <RNView style={computedStyle.container}>
          {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
          {renderChildren()}
          {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
        </RNView>
      </Animated.View>
    </SafeAreaView>
  );
};

export { Toast };
