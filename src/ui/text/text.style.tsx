import { StyleSheet } from "react-native";

import {
  getThemeProperty,
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
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, "#000"),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent"),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: getThemeProperty(
      theme.colors,
      props.textDecorColor,
      "transparent"
    ),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  if (props.h) {
    computedStyle.text = {
      ...computedStyle.text,
      height: props.h
    };
  }

  if (props.w) {
    computedStyle.text = {
      ...computedStyle.text,
      width: props.w
    };
  }

  if (props.minH) {
    computedStyle.text = {
      ...computedStyle.text,
      minHeight: props.minH
    };
  }

  if (props.flex) {
    computedStyle.text = {
      ...computedStyle.text,
      flex: props.flex
    };
  }

  if (props.minW) {
    computedStyle.text = {
      ...computedStyle.text,
      minWidth: props.minW
    };
  }

  if (props.fontWeight) {
    computedStyle.text = {
      ...computedStyle.text,
      fontWeight: props.fontWeight
    };
  }

  if (props.textDecorLine) {
    computedStyle.text = {
      ...computedStyle.text,
      textDecorationLine: props.textDecorLine
    };
  }

  if (props.textDecorStyle) {
    computedStyle.text = {
      ...computedStyle.text,
      textDecorationStyle: props.textDecorStyle
    };
  }

  if (props.letterSpacing) {
    computedStyle.text = {
      ...computedStyle.text,
      letterSpacing: props.letterSpacing
    };
  }

  if (props.lineHeight) {
    computedStyle.text = {
      ...computedStyle.text,
      lineHeight: props.lineHeight
    };
  } else {
    computedStyle.text = {
      ...computedStyle.text,
      lineHeight: 1.5 * getThemeProperty(theme.fontSize, props.fontSize, 16)
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.text = {
      ...computedStyle.text,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
