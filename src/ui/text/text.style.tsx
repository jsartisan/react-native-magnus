import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeFontFamily,
  getFontWeight,
  getThemeColor,
} from '../../theme/theme.service';
import { TextProps } from './text.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: TextProps) => {
  const computedStyle: any = {};

  computedStyle.text = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    flex: props.flex,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    overflow: props.overflow,
    opacity: props.opacity,

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

    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.text = {
      ...computedStyle.text,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
