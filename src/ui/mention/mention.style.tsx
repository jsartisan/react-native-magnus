import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createPositionStyle,
  getThemeColor,
} from '../../theme/theme.service';
import { MentionProps } from './mention.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: MentionProps) => {
  const computedStyle: any = {};

  computedStyle.list = {
    flex: 1,
    zIndex: 99,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.loading = {
    height: 60,
    marginTop: -60,
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    ...createSpacingStyles(props, theme.spacing),
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createBorderWidthStyles(props),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    flex: 1,
  };

  if (props.shadow) {
    computedStyle.list = {
      ...computedStyle.list,
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
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
