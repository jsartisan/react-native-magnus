import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
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

  computedStyle.div = {
    borderColor: getThemeProperty(theme.colors, props.borderColor),
  };

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.highlightContainer = {
    backgroundColor: getThemeProperty(theme.colors, 'gray100'),
    height: getThemeProperty(theme.fontSize, props.size) + 5,
    width: getThemeProperty(theme.fontSize, props.size) + 5,
    alignItems: 'center',
    justifyContent: 'center',
    top: -2.5,
    left: -2.5,
    borderRadius: 3,
    zIndex: 1,
    position: 'absolute',
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
