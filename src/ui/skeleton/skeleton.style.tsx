import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
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

  computedStyle.container = {
    ...createSpacingStyles(props, theme.spacing),
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (props.flex) {
    computedStyle.container = {
      ...computedStyle.container,
      flex: props.flex,
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

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
