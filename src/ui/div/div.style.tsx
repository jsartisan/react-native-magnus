import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createFlexStyles,
  createShadowStyles,
  createPositionStyle,
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
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.div = {
    flexDirection: props.row ? 'row' : props.flexDir,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createFlexStyles(props),
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
