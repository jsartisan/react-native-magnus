import * as React from "react";
import { useContext, useState } from "react";
import color from "color";
import {
  Animated as RNAnimated,
  Text as RNText,
  View as RNView,
  Platform as RNPlatform,
  TouchableHighlight as RNButton,
  ActivityIndicator as RNActivityIndicator,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  GestureResponderEvent as RNGestureResponderEvent
} from "react-native";

import { getStyle } from "./checkbox-button.style";
import { ThemeContext } from "../../theme";
import { ButtonProps } from "./checkbox-button.type";
import { getThemeProperty } from "../../theme/theme.service";

const ANDROID_VERSION_PIE = 28;
const ANDROID_VERSION_LOLLIPOP = 21;
const canSupportRipple =
  RNPlatform.OS === "android" && RNPlatform.Version >= ANDROID_VERSION_LOLLIPOP;

const CheckboxButton: React.FunctionComponent<ButtonProps> = props => {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    prefix,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    color: colorProp,
    loading,
    disabled,
    loaderColor,
    loaderSize,
    children,
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
    shadow,
    borderless,
    rippleColor,
    shadowColor,
    onPress: onPressProp,
    checked: checkedProp,
    defaultChecked,
    block,
    ripple,
    underlayColor: underlayColorProp,
    activeUnderlayColor: activeUnderlayColorPop,
    opacity,
    activeOpacity,
    ...rest
  } = props;

  const theme = useContext(ThemeContext);
  const [checked, setChecked] = useState(
    "checked" in props ? checkedProp : defaultChecked
  );
  const computedStyle = getStyle(theme, { ...props });
  const underlayColor = getThemeProperty(
    theme.colors,
    checked ? activeUnderlayColorPop : underlayColorProp,
    color(getThemeProperty(theme.colors, props.bg, "#e1e1e1"))
      .darken(0.1)
      .rgb()
      .string()
  );

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === "string") {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  /**
   * renders container based on props
   */
  const renderContainer = () => {
    if (canSupportRipple === true && ripple === true) {
      const useForeground =
        RNPlatform.OS === "android" &&
        RNPlatform.Version >= ANDROID_VERSION_PIE;

      const calculatedRippleColor = color(
        getThemeProperty(theme.colors, rippleColor, "white")
      )
        .alpha(disabled ? 0 : 0.2)
        .rgb()
        .string();

      return (
        <RNTouchableNativeFeedback
          {...rest}
          onPress={disabled || loading ? undefined : onPress}
          useForeground={useForeground}
          background={RNTouchableNativeFeedback.Ripple(
            calculatedRippleColor,
            borderless
          )}
        >
          <RNView style={computedStyle.button}>
            {loading === true ? (
              <RNView style={computedStyle.container}>
                <RNView style={computedStyle.loadingContainer}>
                  <RNActivityIndicator
                    size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                    color={getThemeProperty(
                      theme.colors,
                      loaderColor,
                      "#e1e1e1"
                    )}
                  />
                </RNView>
              </RNView>
            ) : (
              <RNView style={computedStyle.container}>
                {prefix}
                {renderChildren()}
                {suffix}
              </RNView>
            )}
          </RNView>
        </RNTouchableNativeFeedback>
      );
    }

    /**
     * on press checkbox
     */
    const onPress = (event: RNGestureResponderEvent) => {
      if (disabled) {
        return;
      }

      if (!("checked" in props)) {
        setChecked(!checked);
      }

      if (typeof onPressProp === "function") {
        onPressProp(event);
      }
    };

    return (
      <RNButton
        {...rest}
        onPress={disabled || loading ? undefined : onPress}
        style={computedStyle.button}
        underlayColor={underlayColor}
      >
        {loading === true ? (
          <RNView style={computedStyle.container}>
            <RNView style={computedStyle.loadingContainer}>
              <RNActivityIndicator
                size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                color={getThemeProperty(theme.colors, loaderColor, "#e1e1e1")}
              />
            </RNView>
          </RNView>
        ) : (
          <RNAnimated.View style={computedStyle.container}>
            {prefix}
            {renderChildren()}
            {suffix}
          </RNAnimated.View>
        )}
      </RNButton>
    );
  };

  /**
   * if the platform supports ripple, then use TouchableNativeFeedback
   */

  return <>{renderContainer()}</>;
};

CheckboxButton.defaultProps = {
  bg: "white",
  activeBg: "gray300",
  p: "md",
  color: "white",
  activeColor: "black",
  rounded: "md",
  loading: false,
  disabled: false,
  loaderSize: "text400",
  loaderColor: "gray400",
  block: false,
  position: "relative",
  shadowColor: "gray800",
  shadow: 0,
  fontSize: "text400",
  rippleColor: "white",
  ripple: true,
  borderless: false,
  alignItems: "center",
  justifyContent: "center",
  onPress: () => {},
  flexDir: "row",
  opacity: 1,
  activeOpacity: 1,
  defaultChecked: false
};

export { CheckboxButton };
