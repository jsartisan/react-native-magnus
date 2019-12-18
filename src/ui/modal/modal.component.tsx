import * as React from "react";
import { useState, useImperativeHandle } from "react";
import { SafeAreaView } from "react-native";
import { Animation, CustomAnimation } from "react-native-animatable";
import RNModal, { Orientation } from "react-native-modal";

import { Div } from "../div/div.component";
import { getStyle } from "./modal.style";

type modalRef = {
  open: () => void;
  close: () => void;
};

type OrNull<T> = null | T;
interface ModalProps {
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
  isVisible?: boolean;
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
}

const Modal = React.forwardRef<modalRef, ModalProps>((props, ref) => {
  const { bg, h, children, ...rest } = props;
  const [isVisible, setIsVisible] = useState(false);
  const computedStyle = getStyle(props);

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
    <RNModal isVisible={isVisible} {...rest} style={computedStyle.modal}>
      <Div bg={bg} h={h}>
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
