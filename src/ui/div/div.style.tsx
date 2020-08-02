import { StyleSheet } from 'react-native';

import { ThemeType } from '../../theme';
import {
  getThemeProperty,
  createFlexStyles,
  createShadowStyles,
  createPositionStyle,
  createSpacingStyles,
  createResponsiveStyle,
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

  computedStyle.div = {
    flexDirection: createResponsiveStyle(
      props.row ? 'row' : props.flexDir,
      theme
    ),
    flexWrap: createResponsiveStyle(props.flexWrap, theme),
    alignItems: createResponsiveStyle(props.alignItems, theme),
    justifyContent: createResponsiveStyle(props.justifyContent, theme),
    height: createResponsiveStyle(props.h, theme),
    width: createResponsiveStyle(props.w, theme),
    minWidth: createResponsiveStyle(props.minW, theme),
    minHeight: createResponsiveStyle(props.minH, theme),
    alignSelf: createResponsiveStyle(props.alignSelf, theme),
    maxWidth: createResponsiveStyle(props.maxW, theme),
    maxHeight: createResponsiveStyle(props.maxH, theme),
    opacity: createResponsiveStyle(props.opacity, theme),
    overflow: createResponsiveStyle(props.overflow, theme),
    zIndex: createResponsiveStyle(props.zIndex, theme),
    borderStyle: createResponsiveStyle(props.borderStyle, theme),
    backgroundColor: getThemeProperty(
      theme.colors,
      createResponsiveStyle(props.bg, theme),
      'transparent'
    ),
    flex: createResponsiveStyle(props.flex, theme),
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme),
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
