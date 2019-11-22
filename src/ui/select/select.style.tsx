import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createDirectionalStyles,
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
    flexDirection: "row",
    alignItems: "center",
    width: props.w,
    borderColor: getThemeProperty(theme.colors, props.borderColor, "#e1e1e1"),
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent")
  };

  if (state.isFocussed) {
    computedStyle.container = {
      ...computedStyle.container,
      borderColor: getThemeProperty(
        theme.colors,
        props.focusBorderColor,
        computedStyle.container.borderColor
      )
    };
  }

  computedStyle.input = {
    height: "100%",
    flex: 1
  };

  computedStyle.suffix = {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 5
  };

  computedStyle.prefix = {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 5
  };

  if (props.p) {
    computedStyle.container = {
      ...computedStyle.container,
      ...createDirectionalStyles("padding", props.p, "number")
    };
  }

  if (props.m) {
    computedStyle.container = {
      ...computedStyle.container,
      ...createDirectionalStyles("margin", props.m, "number")
    };
  }

  if (props.h) {
    computedStyle.container = {
      ...computedStyle.container,
      height: props.h
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

  if (props.borderWidth) {
    computedStyle.container = {
      ...computedStyle.container,
      borderWidth: props.borderWidth
    };
  }

  if (props.rounded) {
    computedStyle.container = {
      ...computedStyle.container,
      ...createBorderRadiusStyles(props.rounded, theme.borderRadius)
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
