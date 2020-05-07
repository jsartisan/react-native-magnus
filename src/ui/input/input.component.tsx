import * as React from 'react';
import color from 'color';
import { useContext, useState } from 'react';
import {
  View as RNView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { InputProps } from './input.type';
import { getStyle } from './input.style';
import { ThemeContext } from '../../theme';
import { getThemeProperty } from '../../theme/theme.service';

const Input = React.forwardRef<RNTextInput, InputProps>((props, ref) => {
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
    bg,
    minH,
    minW,
    color: colorProp,
    suffix,
    prefix,
    style,
    onBlur,
    loading,
    onFocus,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    loaderSize,
    fontSize,
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
    loaderColor,
    focusBorderColor,
    shadow,
    flex,
    shadowColor,
    zIndex,
    opacity,
    placeholderTextColor,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const [isFocussed, setIsFocussed] = useState(false);
  const computedStyle = getStyle(theme, props, { isFocussed });
  const placeholderColor = placeholderTextColor
    ? color(getThemeProperty(theme.colors, placeholderTextColor, '#e1e1e1'))
        .alpha(0.4)
        .rgb()
        .string()
    : color(getThemeProperty(theme.colors, colorProp, '#e1e1e1'))
        .alpha(0.4)
        .rgb()
        .string();

  /**
   * on focus input
   */
  const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocussed(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   * @param e
   */
  const onBlurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocussed(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <RNView style={computedStyle.container}>
      {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
      <RNTextInput
        ref={ref}
        onFocus={(e) => onFocusInput(e)}
        onBlur={(e) => onBlurInput(e)}
        style={computedStyle.input}
        {...rest}
        placeholderTextColor={placeholderColor}
      />
      {!loading && suffix && (
        <RNView style={computedStyle.suffix}>{suffix}</RNView>
      )}
      {loading && (
        <RNView style={computedStyle.suffix}>
          <RNActivityIndicator
            size={getThemeProperty(theme.fontSize, loaderSize, 16)}
            color={getThemeProperty(theme.colors, loaderColor, '#e1e1e1')}
          />
        </RNView>
      )}
    </RNView>
  );
});

Input.defaultProps = {
  p: 'md',
  borderColor: 'gray200',
  fontSize: 'text300',
  borderWidth: 1,
  rounded: 'md',
  loading: false,
  color: 'gray800',
  shadow: 0,
  shadowColor: 'black500',
  loaderSize: 'text400',
  loaderColor: 'gray300',
};

export { Input };
