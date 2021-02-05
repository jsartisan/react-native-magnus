import color from 'color';

import { getThemeColor } from '../../theme/theme.service';
import { ButtonProps } from './button.type';
import { ThemeType } from '../../theme/type';

/**
 * returns underlay color
 *
 * @param theme
 * @param props
 */
export const getUnderlayColor = (theme: ThemeType, props: ButtonProps) => {
  return getThemeColor(
    theme.colors,
    props.underlayColor
      ? props.underlayColor
      : color(getThemeColor(theme.colors, props.bg)).darken(0.1).rgb().string()
  );
};

/**
 * return ripple color
 *
 * @param theme
 * @param props
 */
export const getRippleColor = (theme: ThemeType, props: ButtonProps) => {
  return color(getThemeColor(theme.colors, props.rippleColor))
    .alpha(props.disabled ? 0 : 0.2)
    .rgb()
    .string();
};
