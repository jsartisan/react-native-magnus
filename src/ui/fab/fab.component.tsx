import * as React from 'react';
import {
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  GestureResponderEvent,
} from 'react-native';
import color from 'color';

import { getThemeProperty } from '../../theme/theme.service';
import { getStyle } from './fab.style';
import { ThemeContext } from '../../theme';
import { Button } from '../button/button.component';
import { Icon } from '../icon/icon.component';
import { FabProps } from './fab.type';

const Fab = (props: FabProps) => {
  const { openOnMount, showBackground } = props;
  const [active, setActive] = React.useState(false);

  const actionsBottomAnimation = new Animated.Value(
    (props.h || 40) + (props.bottom || 40) - 10
  );
  const animation = new Animated.Value(0);
  const actionsAnimation = new Animated.Value(0);
  const fadeAnimation = new Animated.Value(1);

  React.useEffect(() => {
    if (openOnMount) animateButton();
  }, [openOnMount]);

  const getIcon = () => {
    const { icon, color: colorProp, fontSize, activeIcon } = props;

    if (active) {
      if (typeof activeIcon === 'string') {
        return <Icon name={activeIcon} fontSize={fontSize} color={colorProp} />;
      }

      if (React.isValidElement(activeIcon)) {
        return activeIcon;
      }
    } else {
      if (typeof icon === 'string') {
        return <Icon name={icon} fontSize={fontSize} color={colorProp} />;
      }

      if (React.isValidElement(icon)) {
        return icon;
      }
    }

    return false;
  };

  const reset = () => {
    const { animated, onClose, h, bottom, useNativeDriver = false } = props;

    if (animated) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: useNativeDriver,
      }).start();
      Animated.spring(actionsAnimation, {
        toValue: 0,
        useNativeDriver,
      }).start();
      Animated.spring(actionsBottomAnimation, {
        toValue: (h || 40) + (bottom || 40) - 10,
        useNativeDriver,
      }).start();
    }

    setActive(false);
    onClose?.();
  };

  const animateButton = () => {
    const { animated, onOpen, h, bottom, useNativeDriver = false } = props;

    if (active) {
      reset();
      return;
    }

    if (animated) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver,
      }).start();

      Animated.spring(actionsAnimation, {
        toValue: 1,
        useNativeDriver,
      }).start();
      Animated.spring(actionsBottomAnimation, {
        toValue: (h || 40) + (bottom || 40),
        useNativeDriver,
      }).start();

      // only execute it for the background to prevent extra calls
      LayoutAnimation.configureNext({
        duration: 180,
        create: {
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
      });
    }

    setActive(true);
    onOpen?.();
  };

  const handlePressBackdrop = () => {
    props.onPressBackdrop?.();
    reset();
  };

  const renderMainButton = (computedStyles: any) => {
    const {
      animated,
      shadow,
      position,
      right,
      bottom,
      shadowColor,
      ...rest
    } = props;

    let animatedViewStyle;
    let animatedVisibleView;

    if (animated) {
      animatedVisibleView = {
        opacity: fadeAnimation,
      };

      animatedViewStyle = {
        opacity: fadeAnimation,
        transform: [
          {
            rotate: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '180deg'],
            }),
          },
        ],
      };
    } else if (active) {
      animatedVisibleView = {};

      animatedViewStyle = {
        opacity: fadeAnimation,
        transform: [
          {
            rotate: '45deg',
          },
        ],
      };
    } else {
      animatedVisibleView = {};

      animatedViewStyle = {
        transform: [
          {
            rotate: '0deg',
          },
        ],
      };
    }

    return (
      <Animated.View
        style={[computedStyles.button, animatedVisibleView]}
        accessible
        accessibilityLabel="Floating Action Button"
      >
        <Button mb={bottom} mr={right} onPress={animateButton} {...rest}>
          <Animated.View style={[animatedViewStyle]}>{getIcon()}</Animated.View>
        </Button>
      </Animated.View>
    );
  };

  const renderActions = (computedStyle: any) => {
    const { animated, right, children } = props;

    const animatedActionsStyle = animated
      ? {
          opacity: actionsAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }
      : {
          opacity: active ? 1 : 0,
        };

    const actionsStyles = [
      computedStyle.actions,
      animatedActionsStyle,
      {
        right,
        bottom: actionsBottomAnimation,
      },
    ];
    return (
      <Animated.View style={actionsStyles} pointerEvents="box-none">
        {React.Children.map(children || [], (child: React.ReactElement) => {
          return React.cloneElement(child, {
            mb: child.props.mb ? child.props.mb : 'xl',
            onPress: (e: GestureResponderEvent) => {
              if (child.props.onPress) {
                child.props.onPress(e);
              }
              reset();
            },
          });
        })}
      </Animated.View>
    );
  };

  const renderTappableBackground = (theme: any, computedStyle: any) => {
    const { overlayColor, overlayOpacity } = props;

    const calculatedOverlayColor = color(
      getThemeProperty(theme.colors, overlayColor, 'white')
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
          { backgroundColor: calculatedOverlayColor },
        ]}
        onPress={handlePressBackdrop}
      />
    );
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const computedStyle = getStyle(theme, props);

        return (
          <Animated.View pointerEvents="box-none" style={computedStyle.overlay}>
            {active &&
              showBackground &&
              renderTappableBackground(theme, computedStyle)}
            {renderActions(computedStyle)}
            {renderMainButton(computedStyle)}
          </Animated.View>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Fab.defaultProps = {
  activeIcon: 'close',
  animated: true,
  bg: 'red500',
  bottom: 30,
  color: 'white',
  fontSize: 'text500',
  h: 40,
  icon: 'plus',
  openOnMount: false,
  overlayColor: 'gray700',
  overlayOpacity: 0.5,
  position: 'absolute',
  right: 30,
  rounded: 'circle',
  shadow: 3,
  shadowColor: 'gray900',
  showBackground: true,
  useNativeDriver: false,
  w: 40,
};

export { Fab };
