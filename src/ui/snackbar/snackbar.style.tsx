import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
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

  computedStyle.wrapper = {
    position: "absolute",
    bottom: 0,
    width: "100%"
  };

  computedStyle.text = {
    flex: 1,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    color: getThemeProperty(theme.colors, props.color, "white")
  };

  computedStyle.prefix = {
    marginRight: 8
  };

  computedStyle.suffix = {
    marginLeft: 8
  };

  computedStyle.container = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };

  if (props.shadow) {
    computedStyle.container = {
      ...computedStyle.container,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "white")
    };
  }

  if (props.bg) {
    computedStyle.container = {
      ...computedStyle.container,
      backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent")
    };
  }

  computedStyle.button = {
    marginHorizontal: 8,
    marginVertical: 6
  };

  return StyleSheet.create(computedStyle);
};
