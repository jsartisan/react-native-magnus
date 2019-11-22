import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles
} from "../../theme/theme.service";

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.image = {
    position: props.position
  };

  computedStyle.image = {
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  if (props.flex) {
    computedStyle.image = {
      ...computedStyle.image,
      flex: props.flex
    };
  }

  if (props.shadow) {
    computedStyle.image = {
      ...computedStyle.image,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "white")
    };
  }

  if (props.h) {
    computedStyle.image = {
      ...computedStyle.image,
      height: props.h
    };
  }

  if (props.w) {
    computedStyle.image = {
      ...computedStyle.image,
      width: props.w
    };
  }

  if (props.top) {
    computedStyle.image = {
      ...computedStyle.image,
      top: props.top
    };
  }

  if (props.right) {
    computedStyle.image = {
      ...computedStyle.image,
      right: props.right
    };
  }

  if (props.bottom) {
    computedStyle.image = {
      ...computedStyle.image,
      bottom: props.bottom
    };
  }

  if (props.left) {
    computedStyle.image = {
      ...computedStyle.image,
      left: props.left
    };
  }

  if (props.minH) {
    computedStyle.image = {
      ...computedStyle.image,
      minHeight: props.minH
    };
  }

  if (props.minW) {
    computedStyle.image = {
      ...computedStyle.image,
      minWidth: props.minW
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.image = {
      ...computedStyle.image,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
