import { StyleSheet } from 'react-native';

import {
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

  computedStyle.container = {
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
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
