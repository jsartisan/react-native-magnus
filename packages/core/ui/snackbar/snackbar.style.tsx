import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createShadowStyles,
  createSpacingStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { SnackbarProps } from './snackbar.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: SnackbarProps) => {
  const computedStyle: any = {};

  computedStyle.wrapper = {
    width: '100%',
  };

  computedStyle.text = {
    flex: 1,
  };

  computedStyle.prefix = {
    marginRight: 8,
  };

  computedStyle.suffix = {
    marginLeft: 8,
  };

  computedStyle.container = {
    flexDirection: props.flexDir,
    justifyContent: props.justifyContent,
    alignItems: props.justifyContent,
    alignSelf: props.alignSelf,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg),
  };

  return StyleSheet.create(computedStyle);
};
