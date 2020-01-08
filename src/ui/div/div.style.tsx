import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createFlexStyles,
  createPositionStyle,
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

  computedStyle.div = {
    flexDirection: props.flexDir,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    alignSelf: props.alignSelf,
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent"),
    ...createFlexStyles(props),
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  if (props.shadow) {
    computedStyle.div = {
      ...computedStyle.div,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "white")
    };
  }

  if (props.h) {
    computedStyle.div = {
      ...computedStyle.div,
      height: props.h
    };
  }

  if (props.w) {
    computedStyle.div = {
      ...computedStyle.div,
      width: props.w
    };
  }

  if (props.minH) {
    computedStyle.div = {
      ...computedStyle.div,
      minHeight: props.minH
    };
  }

  if (props.minW) {
    computedStyle.div = {
      ...computedStyle.div,
      minWidth: props.minW
    };
  }

  if (props.opacity) {
    computedStyle.div = {
      ...computedStyle.div,
      opacity: props.opacity
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
