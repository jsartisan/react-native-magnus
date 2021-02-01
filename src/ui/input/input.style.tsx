import { isValidElement } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createBorderWidthStyles,
  createBorderColorStyles,
  createSpacingStyles,
  createFlexStyles,
  createBorderRadiusStyles,
  createPositionStyle,
  createShadowStyles,
  getThemeFontFamily,
  getFontWeight,
  getThemeColor,
} from '../../theme/theme.service';
import { InputProps } from './input.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: InputProps, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: props.zIndex,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    width: props.w,
    height: props.h,
    opacity: props.opacity,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createFlexStyles(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (state.isFocussed) {
    computedStyle.container = {
      ...computedStyle.container,
      borderColor: getThemeColor(
        theme.colors,
        props.focusBorderColor
          ? props.focusBorderColor
          : computedStyle.container.borderColor
      ),
    };
  }

  computedStyle.input = {
    flex: 1,
    padding: 0,

    textDecorationLine: props.textDecorLine,
    textDecorationStyle: props.textDecorStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: getThemeColor(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: getThemeColor(theme.colors, props.textDecorColor),
    textShadowColor: getThemeColor(theme.colors, props.textShadowColor),
    textShadowOffset: {
      width: getThemeProperty(theme.shadow, props.textShadowOffset),
      height: getThemeProperty(theme.shadow, props.textShadowOffset),
    },
    textShadowRadius: getThemeProperty(
      theme.borderRadius,
      props.textShadowRadius
    ),

    fontWeight: getFontWeight(
      theme.fontFamily,
      props.fontFamily,
      props.fontWeight
    ),

    fontFamily:
      props.fontFamily ??
      getThemeFontFamily(theme.fontFamily, props.fontWeight),
  };

  computedStyle.suffix = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf:
      props.suffix &&
      isValidElement(props.suffix) &&
      props.suffix.props.alignSelf,
    marginLeft: 5,
  };

  computedStyle.prefix = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    alignSelf:
      props.prefix &&
      isValidElement(props.prefix) &&
      props.prefix.props.alignSelf,
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
