import { StyleSheet } from "react-native";

import {
  createSpacingStyles,
  getThemeProperty
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
    ...createSpacingStyles(props, theme.spacing)
  };

  if (props.avatar) {
    computedStyle.container = {
      ...computedStyle.container,
      flexDirection: "row"
    };
  }

  computedStyle.text = {
    flex: 1,
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
