import * as React from 'react';
import { View as RNView, Modal as RNModal } from 'react-native';
import { useContext, useState, useEffect, useImperativeHandle } from 'react';

import { getStyle } from './overlay.style';
import { ThemeContext } from '../../theme';
import { isFunction } from '../../utilities';
import { OverlayProps, OverlayRef } from './overlay.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Overlay: React.FC<OverlayProps> = React.forwardRef<
  OverlayRef,
  OverlayProps
>((incomingProps, ref) => {
  const props = useDefaultProps('Overlay', incomingProps, {
    bg: 'white',
    w: '80%',
    p: 'lg',
    rounded: 'md',
    isVisible: false,
    overlayOpacity: 0.6,
    overlayColor: 'gray900',
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
    isVisible,
    children,
    overlayColor,
    overlayOpacity,
    onRequestClose,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const [visible, setVisible] = useState(isVisible || false);

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible || false);
    }
  }, [props]);

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
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={
        isFunction(onRequestClose) ? onRequestClose : () => setVisible(false)
      }
      {...rest}
    >
      <RNView style={computedStyle.modal}>
        <RNView style={computedStyle.container}>{children}</RNView>
      </RNView>
    </RNModal>
  );
});

// Overlay.defaultProps = {
//   bg: 'white',
//   w: '80%',
//   p: 'lg',
//   rounded: 'md',
//   isVisible: false,
//   overlayOpacity: 0.6,
//   overlayColor: 'gray900',
// };

export { Overlay };
