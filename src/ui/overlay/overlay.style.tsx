import color from "color";
import { StyleSheet } from "react-native";

import {
  getThemeProperty,
  createFlexStyles,
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

  computedStyle.modal = {
    backgroundColor: color(
      getThemeProperty(theme.colors, props.overlayColor, "transparent")
    )
      .alpha(props.overlayOpacity)
      .rgb()
      .string(),
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  };

  computedStyle.container = {
    backgroundColor: getThemeProperty(theme.colors, props.bg, "transparent"),
    ...createFlexStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    width: props.w,
    height: props.h,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent
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
