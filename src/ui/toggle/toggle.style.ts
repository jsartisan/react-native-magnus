import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  createSpacingStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';
import { ToggleProps } from './toggle.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: ToggleProps) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: 'row',
    height: props.h,
    width: props.w,
    alignItems: 'center',
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.circle = {
    // @ts-ignore
    height: props.h - 6,
    // @ts-ignore
    width: props.h - 6,
    // @ts-ignore
    borderRadius: props.h - 6,
  };

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
