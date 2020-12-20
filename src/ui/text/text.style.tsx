import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createResponsiveStyle,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.text = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    flex: props.flex,
    fontWeight: props.fontWeight,
    textDecorationLine: props.textDecorLine,
    textDecorationStyle: props.textDecorStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight
      ? props.lineHeight
      : 1.5 * getThemeProperty(theme.fontSize, props.fontSize),
    color: getThemeProperty(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    textAlign: createResponsiveStyle(props.textAlign, theme),
    textTransform: props.textTransform,
    overflow: props.overflow,
    opacity: props.opacity,
    textDecorationColor: getThemeProperty(theme.colors, props.textDecorColor),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.text = {
      ...computedStyle.text,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
