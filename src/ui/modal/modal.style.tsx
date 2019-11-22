import { StyleSheet } from "react-native";

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (props: any) => {
  const computedStyle: any = {};

  computedStyle.modal = {
    margin: 0
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.modal = {
      ...computedStyle.modal,
      ...props.style
    };
  }

  return StyleSheet.create(computedStyle);
};
