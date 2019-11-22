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
export const getStyle = (theme: any, props: any, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: getThemeProperty(theme.colors, props.bg, "white"),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
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
    flex: 1,
    padding: 0,
    color: getThemeProperty(theme.colors, props.color, "black")
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

  if (props.shadow) {
    computedStyle.container = {
      ...computedStyle.container,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "black")
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
