import { StyleSheet } from "react-native";

import {
  createFlexStyles,
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  createPositionStyle
} from "../../theme/theme.service";

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent"),
    opacity: props.opacity,
    ...createPositionStyle(props),
    ...createFlexStyles(props),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, "black"),
    textAlign: "right",
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    fontWeight: props.fontWeight,
    lineHeight: getThemeProperty(theme.fontSize, props.fontSize, 16) * 1.2
  };

  computedStyle.loadingContainer = {
    alignItems: "center",
    justifyContent: "center",
    minHeight: getThemeProperty(theme.fontSize, props.loaderSize, 16) * 1.2
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  computedStyle.container = {
    flexDirection: props.flexDir,
    alignItems: props.alignItems,
    justifyContent: "center",
    position: "relative"
  };

  if (props.borderless === false) {
    computedStyle.button = {
      ...computedStyle.button,
      overflow: "hidden"
    };
  }

  if (props.justifyContent) {
    computedStyle.container = {
      ...computedStyle.container,
      justifyContent: props.justifyContent
    };
  }

  if (props.zIndex) {
    computedStyle.button = {
      ...computedStyle.button,
      zIndex: props.zIndex
    };
  }

  if (props.shadow) {
    computedStyle.button = {
      ...computedStyle.button,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "red")
    };
  }

  if (props.block) {
    computedStyle.container = {
      ...computedStyle.container,
      width: "100%",
      alignSelf: "stretch"
    };

    computedStyle.button = {
      ...computedStyle.button,
      alignSelf: "stretch"
    };
  }

  if (props.w) {
    computedStyle.button = {
      ...computedStyle.button,
      width: props.w
    };
  }

  if (props.h) {
    computedStyle.button = {
      ...computedStyle.button,
      height: props.h
    };
  }

  if (props.disabled) {
    computedStyle.button = {
      ...computedStyle.button,
      opacity: 0.5
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
