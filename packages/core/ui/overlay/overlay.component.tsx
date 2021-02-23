import * as React from 'react';
import {
  View as RNView,
  Modal as RNModal,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
} from 'react-native';
import { useState, useEffect, useImperativeHandle } from 'react';

import { getStyle } from './overlay.style';
import { useTheme } from '../../theme';
import { isFunction } from '../../utilities';
import { OverlayProps, OverlayRef } from './overlay.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Overlay = React.forwardRef<
  OverlayRef,
  React.PropsWithChildren<OverlayProps>
>((incomingProps, ref) => {
  const props = useDefaultProps('Overlay', incomingProps, {
    bg: 'white',
    w: '80%',
    p: 'lg',
    rounded: 'md',
    overlayOpacity: 0.6,
    overlayColor: 'gray900',
    animationType: 'fade',
    transparent: true,
    onBackdropPress: () => {},
  });

  const {
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
    bg,
    w,
    h,
    alignItems,
    justifyContent,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    visible: isVisible,
    children,
    overlayColor,
    overlayOpacity,
    onRequestClose,
    onBackdropPress,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);
  const [visible, setVisible] = useState(isVisible ?? false);

  useEffect(() => {
    if ('visible' in props) {
      setVisible(isVisible ?? false);
    }
  }, [isVisible, props]);

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    open() {
      if (visible === false) {
        setVisible(true);
      }
    },
    close() {
      if (visible === true) {
        setVisible(false);
      }
    },
  }));

  return (
    <RNModal
      visible={visible}
      onRequestClose={
        isFunction(onRequestClose) ? onRequestClose : () => setVisible(false)
      }
      {...rest}
    >
      <RNTouchableWithoutFeedback onPress={onBackdropPress}>
        <RNView style={computedStyle.modal}>
          <RNTouchableWithoutFeedback>
            <RNView style={computedStyle.container}>{children}</RNView>
          </RNTouchableWithoutFeedback>
        </RNView>
      </RNTouchableWithoutFeedback>
    </RNModal>
  );
});

export { Overlay };
