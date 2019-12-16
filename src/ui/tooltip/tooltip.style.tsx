import { StyleSheet, Platform } from 'react-native';

import {
  getThemeProperty,
  createFlexStyles,
  createPositionStyle,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: props.flexDir,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createFlexStyles(props),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (props.shadow) {
    computedStyle.container = {
      ...computedStyle.container,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, 'white'),
    };
  }

  if (props.h) {
    computedStyle.container = {
      ...computedStyle.container,
      height: props.h,
    };
  }

  if (props.w) {
    computedStyle.container = {
      ...computedStyle.container,
      width: props.w,
    };
  }

  if (props.minH) {
    computedStyle.container = {
      ...computedStyle.container,
      minHeight: props.minH,
    };
  }

  if (props.minW) {
    computedStyle.container = {
      ...computedStyle.container,
      minWidth: props.minW,
    };
  }

  computedStyle.triangle = {
    width: 0,
    height: 0,
    left: state.left + state.buttonWidth / 2 - 7.5,
    top: state.invert ? state.menuHeight : 0,
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, 'white'),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
