import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createFlexStyles,
  createShadowStyles,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { TooltipProps } from './tooltip.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: TooltipProps, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    alignSelf: 'center',
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    zIndex: props.zIndex,
    ...createFlexStyles(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.triangle = {
    width: 0,
    height: 0,
    left: state.left + state.buttonWidth / 2 - 8,
    top: state.invert ? state.menuHeight - 1 : 1,
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    opacity: props.opacity,
    zIndex: props.zIndex,
    borderBottomColor: getThemeColor(theme.colors, props.bg),
  };

  computedStyle.text = {
    fontWeight: props.fontWeight,
    textDecorationLine: props.textDecorLine,
    textDecorationStyle: props.textDecorStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    color: getThemeColor(theme.colors, props.color),
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
