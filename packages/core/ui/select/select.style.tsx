import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { WINDOW_HEIGHT } from '../../utilities';
import { SelectProps } from './select.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: SelectProps) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    height: WINDOW_HEIGHT * 0.7,
    overflow: 'hidden',
  };

  computedStyle.indicator = {
    alignSelf: 'center',
    marginVertical: 10,
  };

  computedStyle.container = {
    flex: 1,
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
      // @ts-ignore
      ...props.style,
    };
  }
  return StyleSheet.create(computedStyle);
};
