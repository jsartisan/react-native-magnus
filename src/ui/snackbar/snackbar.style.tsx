import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createShadowStyles,
  createSpacingStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: any) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    position: props.position,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    width: '100%',
  };

  computedStyle.text = {
    flex: 1,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    color: getThemeProperty(theme.colors, props.color),
  };

  computedStyle.prefix = {
    marginRight: 8,
  };

  computedStyle.suffix = {
    marginLeft: 8,
  };

  computedStyle.container = {
    flexDirection: props.flexDir,
    justifyContent: props.justifyContent,
    alignItems: props.justifyContent,
    alignSelf: props.alignSelf,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeProperty(theme.colors, props.bg),
  };

  return StyleSheet.create(computedStyle);
};
