import * as React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView, View } from 'react-native';
import { useState, useImperativeHandle, useEffect } from 'react';

import { getStyle } from './drawer.style';
import { useTheme } from '../../theme';
import { DrawerProps, DrawerRef } from './drawer.type';
import { getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Drawer = React.forwardRef<DrawerRef, DrawerProps>(
  (incomingProps, ref) => {
    const props = useDefaultProps('Drawer', incomingProps, {
      drawerPercentage: 70,
      animationTime: 300,
      bg: 'white',
      backdropColor: 'black',
      direction: 'left',
      rounded: 'none',
      backdropTransitionOutTiming: 0,
    });

    const {
      direction,
      drawerPercentage,
      animationTime,
      backdropColor,
      animationInTiming,
      animationIn,
      animationOut,
      style,
      onBackdropPress,
      isVisible,
      animationOutTiming,
      swipeDirection,
      onSwipeComplete,
      children,
      ...rest
    } = props;
    const { theme } = useTheme();
    const computedStyle = getStyle(theme, props as DrawerProps);
    const [visible, setVisible] = useState(isVisible);

    useEffect(() => {
      if ('isVisible' in props) {
        setVisible(props.isVisible ?? false);
      }
    }, [props, visible]);

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
        backdropColor={getThemeColor(theme.colors, backdropColor)}
        animationInTiming={
          animationInTiming ? animationInTiming : animationTime
        }
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
        <View style={computedStyle.container}>
          <SafeAreaView style={computedStyle.safeView}>{children}</SafeAreaView>
        </View>
      </Modal>
    );
  }
);

// Drawer.defaultProps = {
//   drawerPercentage: 70,
//   animationTime: 300,
//   bg: 'white',
//   backdropColor: 'black',
//   direction: 'left',
//   rounded: 'none',
//   backdropTransitionOutTiming: 0,
// };

export { Drawer };
