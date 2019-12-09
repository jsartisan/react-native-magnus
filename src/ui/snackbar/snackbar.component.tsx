import * as React from 'react';
import { useContext, useState, useEffect, useImperativeHandle } from 'react';
import { Animated, SafeAreaView, View as RNView } from 'react-native';

import { getStyle } from './snackbar.style';
import { ThemeContext } from '../../theme';
import { Text } from '../text/text.component';
import { SnackbarRefType, SnackbarProps } from './snackbar.type';

const DURATION_MEDIUM = 7000;

const Snackbar = React.forwardRef<SnackbarRefType, SnackbarProps>(
  (props, ref) => {
    const {
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
      rounded,
      roundedTop,
      roundedRight,
      roundedBottom,
      roundedLeft,
      children,
      onDismiss,
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
      ...rest
    } = props;
    const theme = useContext(ThemeContext);
    const computedStyle = getStyle(theme, props);
    const [opacity] = useState(new Animated.Value(0.0));
    const [hidden, setHidden] = useState(true);
    let hideTimeout: number;

    /**
     * component lifecycle methods
     */
    useEffect(() => {
      return function cleanup() {
        clearTimeout(hideTimeout);
      };
    }, []);

    /**
     * hide the snackbar
     */
    const hide = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      Animated.timing(opacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          setHidden(true);
        }
      });
    };

    /**
     * show snackbar
     */
    const show = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      setHidden(false);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          const isInfinity =
            duration === Number.POSITIVE_INFINITY ||
            duration === Number.NEGATIVE_INFINITY;

          if (finished && !isInfinity) {
            hideTimeout = setTimeout(() => {
              hide();

              if (onDismiss) {
                onDismiss();
              }
            }, duration);
          }
        }
      });
    };

    /**
     * exposing functions to parent
     */
    useImperativeHandle(ref, () => ({
      show() {
        show();
      },
      hide() {
        hide();
      },
    }));

    // if snackbakr is set to be hidden, just return null
    if (hidden) {
      return null;
    }

    return (
      <SafeAreaView pointerEvents="box-none" style={computedStyle.wrapper}>
        <Animated.View
          style={{
            ...computedStyle.container,
            opacity: opacity,
            transform: [
              {
                scale: !hidden
                  ? opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1],
                    })
                  : 1,
              },
            ],
          }}
          {...rest}>
          {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
          <Text style={computedStyle.text}>{children}</Text>
          {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
        </Animated.View>
      </SafeAreaView>
    );
  },
);

Snackbar.defaultProps = {
  bg: 'white',
  color: 'gray900',
  p: 'md',
  m: 'md',
  rounded: 'md',
  fontSize: 'text400',
  duration: DURATION_MEDIUM,
  onDismiss: () => {},
  shadow: 2,
  shadowColor: 'gray500',
};

export { Snackbar };
