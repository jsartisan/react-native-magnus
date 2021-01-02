import { StyleSheet, Dimensions } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createBorderColorStyles,
  createBorderWidthStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: any) => {
  const computedStyle: any = {};

  computedStyle.drawer = {
    margin: 0,
  };

  computedStyle.container = {
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH * (props.drawerPercentage / 100),
    zIndex: 0,
    margin: 0,
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.safeView = {
    flex: 1,
  };

  if (props.direction === 'right') {
    computedStyle.container = {
      ...computedStyle.container,
      right: 0,
    };
  } else {
    computedStyle.container = {
      ...computedStyle.container,
      left: 0,
    };
  }

  return StyleSheet.create(computedStyle);
};
