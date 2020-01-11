import * as React from "react";
import { createRef } from "react";

import {
  Animated,
  Dimensions,
  Easing,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutChangeEvent
} from "react-native";

import { Text } from "../text/text.component";
import { TooltipProps } from "./tooltip.type";
import { getStyle } from "./tooltip.style";
import { ThemeContext } from "../../theme";
import { Triangle } from "./triangle.component";

const STATES = {
  HIDDEN: "HIDDEN",
  ANIMATING: "ANIMATING",
  SHOWN: "SHOWN"
};

const EASING = Easing.bezier(0.4, 0, 0.2, 1);
const SCREEN_INDENT = 8;

class Tooltip extends React.Component<TooltipProps> {
  static defaultProps = {
    animationDuration: 300,
    bg: "gray900",
    color: "white",
    p: "lg",
    rounded: "xl",
    mx: "lg",
    minW: 50,
    zIndex: 1
  };

  _container = createRef<View>();

  state = {
    menuState: STATES.HIDDEN,

    top: 0,
    left: 0,

    menuWidth: 0,
    menuHeight: 0,

    buttonWidth: 0,
    buttonHeight: 0,

    menuMarginAnimation: new Animated.Value(-8),
    opacityAnimation: new Animated.Value(0)
  };

  // Start menu animation
  _onMenuLayout = (e: LayoutChangeEvent) => {
    if (this.state.menuState === STATES.ANIMATING) {
      return;
    }

    const { width, height } = e.nativeEvent.layout;

    this.setState(
      {
        menuState: STATES.ANIMATING,
        menuWidth: width,
        menuHeight: height
      },
      () => {
        Animated.parallel([
          Animated.timing(this.state.menuMarginAnimation, {
            toValue: 0,
            duration: this.props.animationDuration,
            easing: EASING
          }),
          Animated.timing(this.state.opacityAnimation, {
            toValue: 1,
            duration: this.props.animationDuration,
            easing: EASING
          })
        ]).start();
      }
    );
  };

  _onDismiss = () => {
    if (this.props.onHidden) {
      this.props.onHidden();
    }
  };

  show = () => {
    if (this._container.current) {
      this._container.current.measureInWindow(
        (left: any, top: any, buttonWidth: any, buttonHeight: any) => {
          this.setState({
            buttonHeight,
            buttonWidth,
            left,
            menuState: STATES.SHOWN,
            top
          });
        }
      );
    }
  };

  hide = (onHidden: () => void = () => {}) => {
    Animated.timing(this.state.opacityAnimation, {
      toValue: 0,
      duration: this.props.animationDuration,
      easing: EASING
    }).start(() => {
      // Reset state
      this.setState(
        {
          menuState: STATES.HIDDEN,
          menuMarginAnimation: new Animated.Value(-8),
          opacityAnimation: new Animated.Value(0)
        },
        () => {
          if (onHidden) {
            onHidden();
          }

          // Invoke onHidden callback if defined
          if (Platform.OS !== "ios" && this.props.onHidden) {
            this.props.onHidden();
          }
        }
      );
    });
  };

  // @@ TODO: Rework this
  _hide = () => {
    this.hide();
  };

  render() {
    const dimensions = Dimensions.get("window");
    const windowHeight = dimensions.height - (StatusBar.currentHeight || 0);

    const {
      menuHeight,
      buttonHeight,
      opacityAnimation,
      menuMarginAnimation
    } = this.state;

    // Adjust position of menu
    let { top } = this.state;
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
      marginTop: menuMarginAnimation
    };

    const { menuState } = this.state;
    const animationStarted = menuState === STATES.ANIMATING;
    const modalVisible = menuState === STATES.SHOWN || animationStarted;

    const { text, style, children } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => {
          const computedStyle = getStyle(theme, this.props, {
            ...this.state,
            invert
          });

          return (
            <View ref={this._container}>
              <View>{children}</View>

              <Modal
                visible={modalVisible}
                onRequestClose={this._hide}
                supportedOrientations={[
                  "portrait",
                  "portrait-upside-down",
                  "landscape",
                  "landscape-left",
                  "landscape-right"
                ]}
                transparent
                onDismiss={this._onDismiss}
              >
                <TouchableWithoutFeedback
                  onPress={this._hide}
                  accessible={false}
                >
                  <View style={StyleSheet.absoluteFill}>
                    <Animated.View
                      onLayout={this._onMenuLayout}
                      style={[
                        styles.shadowMenuContainer,
                        shadowMenuContainerStyle,
                        style
                      ]}
                    >
                      <Triangle
                        invert={invert}
                        style={computedStyle.triangle}
                      />
                      <Animated.View style={computedStyle.container}>
                        {typeof text === "string" ? (
                          <Text style={computedStyle.text}>{text}</Text>
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  shadowMenuContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    borderRadius: 4,
    opacity: 0,
    width: "100%"
  },
  menuContainer: {
    overflow: "hidden"
  }
});

export { Tooltip };
