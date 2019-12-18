import * as React from "react";
import { useContext, useState, useImperativeHandle } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import Modal from "react-native-modal";

import { getStyle } from "./drawer.style";
import { ThemeContext } from "../../theme";
import { DrawerProps } from "./drawer.type";
import { getThemeProperty } from "../../theme/theme.service";

export interface DrawerRef {
  close: any;
  open: any;
}

const SCREEN_WIDTH = Dimensions.get("window").width;

const Drawer = React.forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  const { direction, drawerPercentage, animationTime, children } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const [isVisible, setIsVisible] = useState(false);
  let DRAWER_WIDTH;

  if (drawerPercentage) {
    DRAWER_WIDTH = SCREEN_WIDTH * (drawerPercentage / 100);
  }

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    open() {
      setIsVisible(true);
    },
    close() {
      setIsVisible(false);
    }
  }));

  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={() => setIsVisible(false)}
      swipeDirection={direction === "left" ? "left" : "right"}
      backdropColor={getThemeProperty(
        theme.colors,
        props.backdropColor,
        "black"
      )}
      backdropTransitionOutTiming={0}
      animationInTiming={animationTime}
      animationOutTiming={animationTime}
      animationIn={direction === "left" ? "slideInLeft" : "slideInRight"}
      animationOut={direction === "left" ? "slideOutLeft" : "slideOutRight"}
      onBackdropPress={() => setIsVisible(false)}
      style={computedStyle.drawer}
    >
      <SafeAreaView
        style={{
          ...computedStyle.container,
          width: DRAWER_WIDTH
        }}
      >
        {children}
      </SafeAreaView>
    </Modal>
  );
});

Drawer.defaultProps = {
  drawerPercentage: 70,
  animationTime: 300,
  bg: "white",
  backdropColor: "black",
  direction: "left",
  rounded: "none"
};

export { Drawer };
