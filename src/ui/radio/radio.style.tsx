import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
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
    borderColor: getThemeProperty(
      theme.colors,
      props.borderColor,
      'transparent'
    ),
  };

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.text = {
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
  };

  computedStyle.highlightContainer = {
    backgroundColor: getThemeProperty(theme.colors, 'gray100', '#e1e1e1'),
    height: getThemeProperty(theme.fontSize, props.size, 16) + 6,
    width: getThemeProperty(theme.fontSize, props.size, 16) + 6,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    left: -3,
    borderRadius: getThemeProperty(theme.fontSize, props.size, 16),
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
