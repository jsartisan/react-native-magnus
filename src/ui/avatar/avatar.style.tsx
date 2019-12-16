import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createPositionStyle,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    alignItems: 'center',
    justifyContent: 'center',
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, '#000'),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    textAlignVertical: 'center',
    textAlign: 'center',
  };

  computedStyle.image = {
    height: props.size,
    width: props.size,
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (props.flexDir) {
    computedStyle.container = {
      ...computedStyle.container,
      flexDirection: props.flexDir,
    };
  }

  if (props.size) {
    computedStyle.container = {
      ...computedStyle.container,
      width: props.size,
      height: props.size,
    };
  }

  if (props.shadow) {
    computedStyle.container = {
      ...computedStyle.container,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, 'white'),
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
