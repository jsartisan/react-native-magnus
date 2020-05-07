import { StyleSheet } from 'react-native';

import {
  createShadowStyles,
  createSpacingStyles,
  createPositionStyle,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.image = {
    flex: props.flex,
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    position: props.position,
    zIndex: props.zIndex,
    alignSelf: props.alignSelf,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.image = {
      ...computedStyle.image,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
