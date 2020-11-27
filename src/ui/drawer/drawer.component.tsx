import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { useContext, useState, useImperativeHandle, useEffect } from 'react';

import { getStyle } from './drawer.style';
import { ThemeContext } from '../../theme';
import { WINDOW_WIDTH } from '../../utilities';
import { DrawerProps, DrawerRef } from './drawer.type';
import { getThemeProperty } from '../../theme/theme.service';

const Drawer = React.forwardRef<DrawerRef, DrawerProps>((props, ref) => {
  const {
    direction,
    drawerPercentage,
    animationTime,
    backdropColor,
    animationInTiming,
    animationIn,
    animationOut,
    onBackdropPress,
    isVisible,
    animationOutTiming,
    children,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const [visible, setVisible] = useState(false);
  let DRAWER_WIDTH;

  if (drawerPercentage) {
    DRAWER_WIDTH = WINDOW_WIDTH * (drawerPercentage / 100);
  }

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible);
    }
  }, [props]);

  /**
   * exposing functions to parent
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
    <Modal
      isVisible={visible}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={direction === 'left' ? 'left' : 'right'}
      backdropColor={getThemeProperty(theme.colors, backdropColor)}
      animationInTiming={animationInTiming ? animationInTiming : animationTime}
      animationOutTiming={
        animationOutTiming ? animationOutTiming : animationTime
      }
      animationIn={direction === 'left' ? 'slideInLeft' : 'slideInRight'}
      animationOut={direction === 'left' ? 'slideOutLeft' : 'slideOutRight'}
      onBackdropPress={
        'onBackdropPress' in props ? onBackdropPress : () => setVisible(false)
      }
      style={computedStyle.drawer}
      {...rest}
    >
      <SafeAreaView
        style={{
          ...computedStyle.container,
          width: DRAWER_WIDTH,
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
  bg: 'white',
  backdropColor: 'black',
  direction: 'left',
  rounded: 'none',
  backdropTransitionOutTiming: 0,
};

export { Drawer };
