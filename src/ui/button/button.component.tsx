import * as React from 'react';
import { useContext } from 'react';
import color from 'color';
import {
  Animated as RNAnimated,
  Text as RNText,
  View as RNView,
  Pressable as RNButton,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { getStyle } from './button.style';
import { ThemeContext } from '../../theme';
import { ButtonProps } from './button.type';
import { getThemeProperty } from '../../theme/theme.service';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
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
    borderEndWidth,
    shadow,
    borderless,
    rippleColor,
    shadowColor,
    onPress,
    block,
    ripple,
    alignSelf,
    ...rest
  } = props;

  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  const underlayColor = getThemeProperty(
    theme.colors,
    props.underlayColor
      ? props.underlayColor
      : color(getThemeProperty(theme.colors, props.bg))
          .darken(0.1)
          .rgb()
          .string()
  );

  const calculatedRippleColor = color(
    getThemeProperty(theme.colors, rippleColor)
  )
    .alpha(disabled ? 0 : 0.2)
    .rgb()
    .string();

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  return (
    <RNButton
      {...rest}
      onPress={disabled || loading ? undefined : onPress}
      style={({ pressed }) => [
        computedStyle.button,
        pressed && { backgroundColor: underlayColor },
      ]}
      android_ripple={
        !ripple
          ? {
              color: calculatedRippleColor,
              borderless,
            }
          : null
      }
    >
      {loading ? (
        <RNView style={computedStyle.container}>
          <RNView style={computedStyle.loadingContainer}>
            <RNActivityIndicator
              size={getThemeProperty(theme.fontSize, loaderSize)}
              color={getThemeProperty(theme.colors, loaderColor)}
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

Button.defaultProps = {
  bg: 'blue600',
  p: 'md',
  color: 'white',
  rounded: 'md',
  loading: false,
  disabled: false,
  loaderSize: 'md',
  loaderColor: 'gray400',
  block: false,
  position: 'relative',
  shadowColor: 'gray800',
  shadow: 0,
  fontSize: 'md',
  rippleColor: 'white',
  ripple: true,
  borderless: false,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  onPress: () => {},
  flexDir: 'row',
};

export { Button };
