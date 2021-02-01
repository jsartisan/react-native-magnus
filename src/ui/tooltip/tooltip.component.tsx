import * as React from 'react';
import { useRef, useImperativeHandle } from 'react';
import {
  View,
  Modal,
  Easing,
  Animated,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import { getStyle } from './tooltip.style';
import { useTheme } from '../../theme';
import { Text } from '../text/text.component';
import { Triangle } from './triangle.component';
import { TooltipProps, TooltipRef } from './tooltip.type';
import { useStateCallback, WINDOW_HEIGHT } from '../../utilities';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const STATES = {
  HIDDEN: 'HIDDEN',
  ANIMATING: 'ANIMATING',
  SHOWN: 'SHOWN',
};

const EASING = Easing.bezier(0.4, 0, 0.2, 1);
const SCREEN_INDENT = 8;

const Tooltip = React.forwardRef<
  TooltipRef,
  React.PropsWithChildren<TooltipProps>
>((incomingProps, ref) => {
  const props = useDefaultProps('Tooltip', incomingProps, {
    animationDuration: 300,
    bg: 'gray900',
    color: 'white',
    p: 'md',
    rounded: 'xl',
    mx: 'lg',
    minW: 50,
    zIndex: 1,
    fontSize: 'md',
    useNativeDriver: false,
  });

  const container = useRef<View>(null);
  const [state, setState] = useStateCallback({
    visible: STATES.HIDDEN,
    top: 0,
    left: 0,
    menuWidth: 0,
    menuHeight: 0,
    buttonWidth: 0,
    buttonHeight: 0,
    marginAnimation: new Animated.Value(-8),
    opacityAnimation: new Animated.Value(0),
  });
  const {
    visible,
    menuHeight,
    buttonHeight,
    opacityAnimation,
    marginAnimation,
  } = state;
  let { top } = state;
  const windowHeight = WINDOW_HEIGHT - (StatusBar.currentHeight ?? 0);
  let invert = false;
  if (top + menuHeight + buttonHeight + SCREEN_INDENT > windowHeight) {
    top = top - menuHeight - SCREEN_INDENT;
    invert = true;
  } else if (top < SCREEN_INDENT) {
    top = SCREEN_INDENT + buttonHeight;
  } else {
    top = top + buttonHeight + SCREEN_INDENT;
    invert = false;
  }
  const shadowMenuContainerStyle = {
    opacity: opacityAnimation,
    top,
    marginTop: marginAnimation,
  };
  const {
    text,
    style,
    children,
    bg,
    animationDuration,
    useNativeDriver,
    ...rest
  } = props;
  const animationStarted = visible === STATES.ANIMATING;
  const modalVisible = visible === STATES.SHOWN || animationStarted;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props, {
    ...state,
    invert,
  });

  /**
   * on dismissal of tooltip
   *
   * TODO: add onDismiss event
   */
  const onDismiss = () => {};

  /**
   * shows the tooltip
   */
  const show = () => {
    if (container.current) {
      container.current.measureInWindow(
        (left: any, top: any, buttonWidth: any, buttonHeight: any) => {
          setState(
            {
              ...state,
              buttonHeight,
              buttonWidth,
              left,
              visible: STATES.SHOWN,
              top,
            },
            () => {
              Animated.parallel([
                Animated.timing(state.marginAnimation, {
                  toValue: 0,
                  duration: animationDuration,
                  easing: EASING,
                  useNativeDriver: useNativeDriver!,
                }),
                Animated.timing(state.opacityAnimation, {
                  toValue: 1,
                  duration: animationDuration,
                  easing: EASING,
                  useNativeDriver: useNativeDriver!,
                }),
              ]).start();
            }
          );
        }
      );
    }
  };

  /**
   * hides the tooltip
   *
   * @param onHidden
   */
  const hide = () => {
    Animated.timing(state.opacityAnimation, {
      toValue: 0,
      duration: animationDuration,
      easing: EASING,
      useNativeDriver: useNativeDriver!,
    }).start(() => {
      setState({
        ...state,
        visible: STATES.HIDDEN,
        marginAnimation: new Animated.Value(-8),
        opacityAnimation: new Animated.Value(0),
      });
    });
  };

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    show() {
      show();
    },
    hide() {
      hide();
    },
  }));

  return (
    <View ref={container} onLayout={() => null}>
      <View>{children}</View>
      <Modal
        visible={modalVisible}
        onRequestClose={hide}
        supportedOrientations={[
          'portrait',
          'portrait-upside-down',
          'landscape',
          'landscape-left',
          'landscape-right',
        ]}
        transparent
        onDismiss={onDismiss}
      >
        <TouchableWithoutFeedback onPress={hide} accessible={false}>
          <View style={StyleSheet.absoluteFill}>
            <Animated.View
              style={[
                styles.shadowMenuContainer,
                shadowMenuContainerStyle,
                style,
              ]}
            >
              <Triangle invert={invert} style={computedStyle.triangle} />
              <Animated.View style={computedStyle.container}>
                {typeof text === 'string' ? (
                  <Text {...rest}>{text}</Text>
                ) : (
                  text
                )}
              </Animated.View>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
});

// Tooltip.defaultProps = {
//   animationDuration: 300,
//   bg: 'gray900',
//   color: 'white',
//   p: 'md',
//   rounded: 'xl',
//   mx: 'lg',
//   minW: 50,
//   zIndex: 1,
//   fontSize: 'md',
//   useNativeDriver: false,
// };

const styles = StyleSheet.create({
  shadowMenuContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderRadius: 4,
    opacity: 0,
    width: '100%',
  },
  menuContainer: {
    overflow: 'hidden',
  },
});

export { Tooltip };
