import * as React from "react";
import { useState, useImperativeHandle, useContext } from "react";
import { SafeAreaView } from "react-native";
import { Animation, CustomAnimation } from "react-native-animatable";
import RNModal, { Orientation } from "react-native-modal";

import {
  ThemeContext,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";
import { Div } from "../div/div.component";
import { getStyle } from "./modal.style";

type modalRef = {
  open: () => void;
  close: () => void;
};

type OrNull<T> = null | T;
interface ModalProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  h?: number | string;
  children: React.ReactElement[] | React.ReactElement;
  animationIn?: Animation | CustomAnimation;
  animationInTiming?: number;
  animationOut?: Animation | CustomAnimation;
  animationOutTiming?: number;
  avoidKeyboard?: boolean;
  coverScreen?: boolean;
  hasBackdrop?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  backdropTransitionInTiming?: number;
  backdropTransitionOutTiming?: number;
  customBackdrop?: React.ReactNode;
  useNativeDriver?: boolean;
  deviceHeight?: number;
  deviceWidth?: number;
  hideModalContentWhileAnimating?: boolean;
  propagateSwipe?: boolean;
  onModalShow?: () => void;
  onModalWillShow?: () => void;
  onModalHide?: () => void;
  onModalWillHide?: () => void;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  swipeThreshold?: number;
  scrollTo?: OrNull<(e: any) => void>;
  scrollOffset?: number;
  scrollOffsetMax?: number;
  scrollHorizontal?: boolean;
  supportedOrientations?: Orientation[];
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}

const Modal = React.forwardRef<modalRef, ModalProps>((props, ref) => {
  const {
    bg,
    h,
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
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    alignItems,
    justifyContent,
    children,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const [visible, setIsVisible] = useState(false);
  const computedStyle = getStyle(theme, props);

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
    <RNModal isVisible={visible} {...rest} style={computedStyle.modal}>
      <Div bg={bg} h={h} style={computedStyle.container}>
        <SafeAreaView pointerEvents="box-none">{children}</SafeAreaView>
      </Div>
    </RNModal>
  );
});

Modal.defaultProps = {
  bg: "white",
  h: "100%"
};

export { Modal };
