import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView } from 'react-native';
import { useState, useEffect, useImperativeHandle } from 'react';

import { getStyle } from './modal.style';
import { useTheme } from '../../theme';
import { Div } from '../div/div.component';
import { ModalProps, ModalRef } from './modal.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Modal = React.forwardRef<ModalRef, ModalProps>((incomingProps, ref) => {
  const props = useDefaultProps('Modal', incomingProps, {
    bg: 'white',
    h: '100%',
    isVisible: false,
    justifyContent: 'flex-end',
  });

  const {
    bg,
    h,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
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
    borderEndWidth,
    borderTopWidth,
    justifyContent,
    children,
    isVisible,
    ...rest
  } = props;
  const [visible, setVisible] = useState(isVisible);
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props as ModalProps);

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible);
    }
  }, [props, visible]);

  /**
   * exposing functions through ref
   */
  useImperativeHandle(ref, () => ({
    open() {
      setVisible(true);
    },
    close() {
      setVisible(false);
    },
  }));

  return (
    <RNModal isVisible={visible} {...rest} style={computedStyle.modal}>
      <Div bg={bg} h={h ?? '100%'} style={computedStyle.container}>
        <SafeAreaView style={computedStyle.safeView}>{children}</SafeAreaView>
      </Div>
    </RNModal>
  );
});

// Modal.defaultProps = {
//   bg: 'white',
//   h: '100%',
//   isVisible: false,
//   justifyContent: 'flex-end',
// };

export { Modal };
