import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
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
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.indicator = {
    alignSelf: 'center',
    marginVertical: 10,
  };

  computedStyle.container = {
    ...createSpacingStyles(props, theme.spacing),
  };

  if (props.h) {
    computedStyle.container = {
      ...computedStyle.container,
      height: props.h,
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
