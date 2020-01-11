import * as React from "react";
import { useContext, useState, useEffect, useImperativeHandle } from "react";
import { Animated, SafeAreaView, View as RNView, Text } from "react-native";

import { getStyle } from "./snackbar.style";
import { ThemeContext } from "../../theme";
import { SnackbarRefType, SnackbarProps } from "./snackbar.type";

let hideTimeout: number;

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
      position,
      flexDir,
      justifyContent,
      alignItems,
      alignSelf,
      shadow,
      shadowColor,
      opacity: opacityProp,
      ...rest
    } = props;
    const theme = useContext(ThemeContext);
    const computedStyle = getStyle(theme, props);
    const [opacity] = useState(new Animated.Value(0.0));
    const [hidden, setHidden] = useState(true);

    /**
     * component lifecycle methods
     */
    useEffect(() => {
      return function cleanup() {
        clearTimeout(hideTimeout);
      };
    }, [hideTimeout]);

    /**
     * hide the snackbar
     */
    const hide = () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      Animated.timing(opacity, {
        toValue: 0,
        duration: 100
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
        duration: 200
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
      }
    }));

    // if snackbakr is set to be hidden, just return null
    if (hidden) {
      return null;
    }

    /**
     * renders children based on type
     */
    const renderChildren = () => {
      if (typeof children === "string") {
        return <Text style={computedStyle.text}>{children}</Text>;
      }

      return children;
    };

    return (
      <SafeAreaView pointerEvents="box-none" style={computedStyle.wrapper}>
        <Animated.View
          style={{
            ...computedStyle.container,
            opacity,
            transform: [
              {
                scale: !hidden
                  ? opacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1]
                    })
                  : 1
              }
            ]
          }}
          {...rest}
        >
          {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
          {renderChildren()}
          {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
        </Animated.View>
      </SafeAreaView>
    );
  }
);

Snackbar.defaultProps = {
  bg: "gray900",
  color: "white",
  p: "lg",
  m: "md",
  rounded: "md",
  fontSize: "text400",
  duration: 4000,
  onDismiss: () => {},
  shadow: 2,
  shadowColor: "gray500",
  position: "absolute",
  bottom: 0,
  flexDir: "row",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center"
};

export { Snackbar };
