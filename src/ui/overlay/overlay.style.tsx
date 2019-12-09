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

  computedStyle.modal = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  computedStyle.container = {
    alignSelf: 'center',
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    width: props.w,
    ...createSpacingStyles(props, theme.spacing),
    alignItems: 'center',
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
