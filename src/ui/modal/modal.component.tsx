import * as React from "react";
import { useState, useImperativeHandle } from "react";
import { SafeAreaView } from "react-native";
import RNModal, { ModalProps as RNModalProps } from "react-native-modal";

import { Div } from "../div/div.component";
import { getStyle } from "./modal.style";

type modalRef = {
  open: () => void;
  close: () => void;
};

interface ModalProps extends RNModalProps {
  bg?: string;
  h?: number | string;
  children: React.ReactElement[] | React.ReactElement;
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
