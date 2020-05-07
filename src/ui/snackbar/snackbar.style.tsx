import { StyleSheet } from 'react-native';

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
export const getStyle = (theme: any, props: any) => {
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
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    color: getThemeProperty(theme.colors, props.color, 'white'),
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
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
  };

  return StyleSheet.create(computedStyle);
};
