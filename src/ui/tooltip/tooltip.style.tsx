import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createFlexStyles,
  createShadowStyles,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles
} from "../../theme/theme.service";

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    alignSelf: "center",
    flexDirection: props.flexDir,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    zIndex: props.zIndex,
    ...createFlexStyles(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent")
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  computedStyle.triangle = {
    width: 0,
    height: 0,
    left: state.left + state.buttonWidth / 2 - 8,
    top: state.invert ? state.menuHeight : 0,
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    opacity: props.opacity,
    zIndex: props.zIndex,
    borderBottomColor: getThemeProperty(theme.colors, props.bg, "transparent")
  };

  computedStyle.text = {
    fontWeight: props.fontWeight,
    textDecorationLine: props.textDecorLine,
    textDecorationStyle: props.textDecorStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight
      ? props.lineHeight
      : 1.5 * getThemeProperty(theme.fontSize, props.fontSize, 16),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    color: getThemeProperty(theme.colors, props.color, "white")
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
