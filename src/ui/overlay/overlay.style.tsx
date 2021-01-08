import color from 'color';
import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createFlexStyles,
  createSpacingStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';
import { OverlayProps } from './overlay.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: OverlayProps) => {
  const computedStyle: any = {};

  computedStyle.modal = {
    backgroundColor: color(getThemeProperty(theme.colors, props.overlayColor))
      .alpha(props.overlayOpacity ?? 50)
      .rgb()
      .string(),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  computedStyle.container = {
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    ...createFlexStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    width: props.w,
    height: props.h,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
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
