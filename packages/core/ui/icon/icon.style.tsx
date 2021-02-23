import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createShadowStyles,
  createSpacingStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { IconProps } from './icon.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: IconProps) => {
  const computedStyle: any = {};

  computedStyle.container = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
    position: props.position,
    alignSelf: props.alignSelf,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: props.opacity,
    color: getThemeColor(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    ...createShadowStyles(props, theme),
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
