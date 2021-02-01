import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createShadowStyles,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createPositionStyle,
  getThemeColor,
} from '../../theme/theme.service';
import { BadgeProps } from './badge.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (
  theme: ThemeType,
  props: React.PropsWithChildren<BadgeProps>
) => {
  const computedStyle: any = {};

  computedStyle.container = {
    alignSelf: props.alignSelf,
    minHeight: typeof props.count === 'undefined' ? 10 : 30,
    minWidth: typeof props.count === 'undefined' ? 10 : 30,
  };

  computedStyle.div = {
    zIndex: 1,
    height: props.h,
    width: props.w,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    opacity: props.opacity,
    minHeight: typeof props.children === 'string' ? 30 : 10,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    minWidth: typeof props.children === 'string' ? 30 : 10,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    position: typeof props.children !== 'string' ? 'absolute' : props.position,
  };

  computedStyle.text = {
    paddingHorizontal: 10,
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
