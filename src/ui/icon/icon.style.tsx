import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createBorderWidthStyles,
  createBorderColorStyles,
  createSpacingStyles,
  createBorderRadiusStyles
} from "../../theme/theme.service";

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    alignSelf: props.alignSelf,
    color: getThemeProperty(theme.colors, props.color, "#000"),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent"),
    alignItems: "center",
    justifyContent: "center",
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  if (props.h) {
    computedStyle.container = {
      ...computedStyle.container,
      height: props.h
    };
  }

  if (props.w) {
    computedStyle.container = {
      ...computedStyle.container,
      width: props.w
    };
  }

  if (props.minH) {
    computedStyle.container = {
      ...computedStyle.container,
      minHeight: props.minH
    };
  }

  if (props.minW) {
    computedStyle.container = {
      ...computedStyle.container,
      minWidth: props.minW
    };
  }

  if (props.position) {
    computedStyle.container = {
      ...computedStyle.container,
      position: props.position
    };
  }

  if (typeof props.top !== "undefined") {
    computedStyle.container = {
      ...computedStyle.container,
      top: props.top
    };
  }

  if (typeof props.right !== "undefined") {
    computedStyle.container = {
      ...computedStyle.container,
      right: props.right
    };
  }

  if (typeof props.bottom !== "undefined") {
    computedStyle.container = {
      ...computedStyle.container,
      bottom: props.bottom
    };
  }

  if (typeof props.left !== "undefined") {
    computedStyle.container = {
      ...computedStyle.container,
      left: props.left
    };
  }

  if (props.shadow) {
    computedStyle.container = {
      ...computedStyle.container,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "white")
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
