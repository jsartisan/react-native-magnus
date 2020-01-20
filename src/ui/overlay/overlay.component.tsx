import * as React from "react";
import { useContext } from "react";
import { View as RNView, Modal as RNModal } from "react-native";

import { getStyle } from "./overlay.style";
import { ThemeContext } from "../../theme";
import { OverlayProps } from "./overlay.type";

const Overlay: React.FunctionComponent<OverlayProps> = (
  props: OverlayProps
) => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    p,
    pr,
    pt,
    pb,
    pl,
    bg,
    w,
    alignItems,
    justifyContent,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    visible,
    children,
    overlayColor,
    overlayOpacity,

    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {}}
      {...rest}
    >
      <RNView style={computedStyle.modal}>
        <RNView style={computedStyle.container}>{children}</RNView>
      </RNView>
    </RNModal>
  );
};

Overlay.defaultProps = {
  bg: "white",
  w: "80%",
  p: "lg",
  rounded: "md",
  visible: false,
  overlayOpacity: 0.6,
  overlayColor: "gray900"
};

export { Overlay };
