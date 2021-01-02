import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

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
export const getStyle = (theme: ThemeType, props: any) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    alignSelf: 'center',
    overflow: props.overflow,
    backgroundColor: getThemeProperty(theme.colors, props.bg),
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

  computedStyle.options = {
    flexWrap: props.flexWrap,
    flexDirection: props.flexDir,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
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
