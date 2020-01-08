import * as React from "react";
import {
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  GestureResponderEvent
} from "react-native";
import color from "color";

import { getThemeProperty } from "../../theme/theme.service";
import { getStyle } from "./fab.style";
import { ThemeContext } from "../../theme";
import { Button } from "../button/button.component";
import { Icon } from "../icon/icon.component";
import { FabProps } from "./fab.type";

interface FabState {
  active: boolean;
}

class Fab extends React.Component<FabProps, FabState> {
  static defaultProps = {
    color: "white",
    fontSize: "text500",
    overlayColor: "gray700",
    overlayOpacity: 0.5,
    position: "absolute",
    openOnMount: false,
    showBackground: true,
    animated: true,
    bottom: 30,
    right: 30,
    icon: "plus",
    activeIcon: "close",
    rounded: "circle",
    h: 40,
    w: 40,
    shadow: 3,
    bg: "red500",
    shadowColor: "gray900"
  };

  mainBottomAnimation: any;

  actionsBottomAnimation: any;

  animation: any;

  actionsAnimation: any;

  visibleAnimation: any;

  fadeAnimation: any;

  constructor(props: FabProps) {
    super(props);

    this.state = {
      active: false
    };

    this.mainBottomAnimation = new Animated.Value(props.bottom || 0);
    this.actionsBottomAnimation = new Animated.Value(
      (props.h || 40) + (props.bottom || 40) - 10
    );
    this.animation = new Animated.Value(0);
    this.actionsAnimation = new Animated.Value(0);
    this.visibleAnimation = new Animated.Value(0);
    this.fadeAnimation = new Animated.Value(1);
  }

  componentDidMount() {
    const { openOnMount } = this.props;

    if (openOnMount) {
      this.animateButton();
    }
  }

  getIcon = () => {
    const { active } = this.state;
    const { icon, color: colorProp, fontSize, activeIcon } = this.props;

    if (active === false) {
      if (typeof icon === "string") {
        return <Icon name={icon} fontSize={fontSize} color={colorProp} />;
      }

      if (React.isValidElement(icon)) {
        return icon;
      }
    } else {
      if (typeof activeIcon === "string") {
        return <Icon name={activeIcon} fontSize={fontSize} color={colorProp} />;
      }

      if (React.isValidElement(activeIcon)) {
        return activeIcon;
      }
    }

    return false;
  };

  reset = () => {
    const { animated, onClose, h, bottom } = this.props;

    if (animated) {
      Animated.spring(this.animation, { toValue: 0 }).start();
      Animated.spring(this.actionsAnimation, { toValue: 0 }).start();
      Animated.spring(this.actionsBottomAnimation, {
        toValue: (h || 40) + (bottom || 40) - 10
      }).start();
    }
    this.updateState(
      {
        active: false
      },
      () => {
        if (onClose) {
          onClose();
        }
      }
    );
  };

  animateButton = () => {
    const { animated, onOpen, h, bottom } = this.props;
    const { active } = this.state;

    if (!active) {
      if (animated) {
        Animated.spring(this.animation, { toValue: 1 }).start();
      }

      if (animated) {
        Animated.spring(this.actionsAnimation, { toValue: 1 }).start();
        Animated.spring(this.actionsBottomAnimation, {
          toValue: (h || 40) + (bottom || 40)
        }).start();

        // only execute it for the background to prevent extra calls
        LayoutAnimation.configureNext({
          duration: 180,
          create: {
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity
          }
        });
      }

      this.updateState(
        {
          active: true
        },
        () => {
          if (onOpen) {
            onOpen();
          }
        }
      );
    } else {
      this.reset();
    }
  };

  updateState = (nextState: FabState, callback: any) => {
    this.setState(nextState, () => {
      if (callback) {
        callback();
      }
    });
  };

  handlePressBackdrop = () => {
    const { onPressBackdrop } = this.props;

    if (onPressBackdrop) {
      onPressBackdrop();
    }
    this.reset();
  };

  handlePressItem = () => {
    this.reset();
  };

  renderMainButton = (computedStyles: any) => {
    const {
      animated,
      shadow,
      position,
      right,
      bottom,
      shadowColor,
      ...rest
    } = this.props;
    const { active } = this.state;

    let animatedViewStyle;
    let animatedVisibleView;

    if (animated) {
      animatedVisibleView = {
        opacity: this.fadeAnimation
      };

      animatedViewStyle = {
        opacity: this.fadeAnimation,
        transform: [
          {
            rotate: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "180deg"]
            })
          }
        ]
      };
    } else if (active) {
      animatedVisibleView = {};

      animatedViewStyle = {
        opacity: this.fadeAnimation,
        transform: [
          {
            rotate: "45deg"
          }
        ]
      };
    } else {
      animatedVisibleView = {};

      animatedViewStyle = {
        transform: [
          {
            rotate: "0deg"
          }
        ]
      };
    }

    return (
      <Animated.View
        style={[computedStyles.button, animatedVisibleView]}
        accessible
        accessibilityLabel="Floating Action Button"
      >
        <Button mb={bottom} mr={right} onPress={this.animateButton} {...rest}>
          <Animated.View style={[animatedViewStyle]}>
            {this.getIcon()}
          </Animated.View>
        </Button>
      </Animated.View>
    );
  };

  renderActions = (computedStyle: any) => {
    const { animated, right, children } = this.props;
    const { active } = this.state;

    let animatedActionsStyle;
    if (animated) {
      animatedActionsStyle = {
        opacity: this.actionsAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      };
    } else {
      animatedActionsStyle = { opacity: active ? 1 : 0 };
    }
    const actionsStyles = [
      computedStyle.actions,
      animatedActionsStyle,
      {
        right,
        bottom: this.actionsBottomAnimation
      }
    ];
    return (
      <Animated.View style={actionsStyles} pointerEvents="box-none">
        {React.Children.map(children || [], (child: React.ReactElement) => {
          return React.cloneElement(child, {
            mb: child.props.mb ? child.props.mb : "xl",
            onPress: (e: GestureResponderEvent) => {
              if (child.props.onPress) {
                child.props.onPress(e);
              }

              this.reset();
            }
          });
        })}
      </Animated.View>
    );
  };

  renderTappableBackground = (theme: any, computedStyle: any) => {
    const { overlayColor, overlayOpacity } = this.props;

    const calculatedOverlayColor = color(
      getThemeProperty(theme.colors, overlayColor, "white")
    )
      .alpha(overlayOpacity || 1)
      .rgb()
      .string();

    // TouchableOpacity don't require a child
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          computedStyle.overlay,
          { backgroundColor: calculatedOverlayColor }
        ]}
        onPress={this.handlePressBackdrop}
      />
    );
  };

  render() {
    const { active } = this.state;
    const { showBackground } = this.props;

    return (
      <ThemeContext.Consumer>
        {theme => {
          const computedStyle = getStyle(theme, this.props);

          return (
            <Animated.View
              pointerEvents="box-none"
              style={computedStyle.overlay}
            >
              {active &&
                showBackground &&
                this.renderTappableBackground(theme, computedStyle)}
              {this.renderActions(computedStyle)}
              {this.renderMainButton(computedStyle)}
            </Animated.View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export { Fab };
