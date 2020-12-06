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

import { getStyle } from './input.style';
import { InputProps } from './input.type';
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
    ms,
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
    borderEndWidth,
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
    ? color(getThemeProperty(theme.colors, placeholderTextColor))
        .alpha(0.4)
        .rgb()
        .string()
    : color(getThemeProperty(theme.colors, colorProp))
        .alpha(0.4)
        .rgb()
        .string();

  /**
   * on focus input
   *
   * @param e
   */
  const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocussed(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   *
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
        onFocus={onFocusInput}
        onBlur={onBlurInput}
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
            size={getThemeProperty(theme.fontSize, loaderSize)}
            color={getThemeProperty(theme.colors, loaderColor)}
          />
        </RNView>
      )}
    </RNView>
  );
});

Input.defaultProps = {
  p: 'md',
  borderColor: 'gray200',
  fontSize: 'md',
  borderWidth: 1,
  rounded: 'md',
  loading: false,
  color: 'gray800',
  shadow: 0,
  shadowColor: 'gray500',
  loaderSize: 'md',
  loaderColor: 'gray300',
};

export { Input };
