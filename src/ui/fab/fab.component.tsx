import * as React from 'react';
import { useContext, useState } from 'react';
import color from 'color';
import {
  Animated as RNAnimated,
  Text as RNText,
  View as RNView,
  Platform as RNPlatform,
  TouchableHighlight as RNButton,
  ActivityIndicator as RNActivityIndicator,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
} from 'react-native';

import { getStyle } from './fab.style';
import { ThemeContext } from '../../theme';
import { FabProps } from './fab.type';
import { Icon } from '../icon/icon.component';
import { getThemeProperty } from '../../theme/theme.service';

const ANDROID_VERSION_PIE = 28;
const ANDROID_VERSION_LOLLIPOP = 21;
const canSupportRipple =
  RNPlatform.OS === 'android' && RNPlatform.Version >= ANDROID_VERSION_LOLLIPOP;

const Fab: React.FunctionComponent<FabProps> = props => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    p,
    pr,
    pt,
    pb,
    pl,
    h,
    w,
    bg,
    minW,
    minH,
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    color: colorProp,
    loading,
    disabled,
    loaderColor,
    loaderSize,
    children,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    shadow,
    center,
    icon,
    borderless,
    rippleColor,
    shadowColor,
    onPress,
    block,
    ripple,
    ...rest
  } = props;

  const [active, setActive] = useState(false);
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, { ...props, active });
  const underlayColor = getThemeProperty(
    theme.colors,
    props.underlayColor,
    color(getThemeProperty(theme.colors, props.bg, '#e1e1e1'))
      .darken(0.1)
      .rgb()
      .string(),
  );

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  /**
   * renders container based on props
   */
  const renderContainer = () => {
    if (canSupportRipple === true && ripple === true) {
      const useForeground =
        RNPlatform.OS === 'android' &&
        RNPlatform.Version >= ANDROID_VERSION_PIE;

      const calculatedRippleColor = color(
        getThemeProperty(theme.colors, rippleColor, 'white'),
      )
        .alpha(disabled ? 0 : 0.2)
        .rgb()
        .string();

      return (
        <RNTouchableNativeFeedback
          {...rest}
          onPress={disabled || loading ? undefined : onPress}
          useForeground={useForeground}
          background={RNTouchableNativeFeedback.Ripple(
            calculatedRippleColor,
            borderless,
          )}>
          <RNView style={computedStyle.button}>
            {loading === true ? (
              <RNView
                style={{
                  ...computedStyle.container,
                  minHeight: getThemeProperty(theme.fontSize, loaderSize, 16),
                }}>
                <RNView
                  style={{
                    minHeight: getThemeProperty(theme.fontSize, loaderSize, 16),
                  }}>
                  <RNActivityIndicator
                    size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                    color={getThemeProperty(
                      theme.colors,
                      loaderColor,
                      '#e1e1e1',
                    )}
                  />
                </RNView>
              </RNView>
            ) : (
              <RNAnimated.View style={computedStyle.container}>
                {typeof icon === 'string' ? (
                  <Icon name={icon} {...computedStyle.icon} />
                ) : (
                  icon
                )}
                {renderChildren()}
              </RNAnimated.View>
            )}
          </RNView>
        </RNTouchableNativeFeedback>
      );
    }

    /**
     * event listener when underlay is shown
     */
    const onShowUnderlay = () => {
      setActive(true);
    };

    /**
     * event listener when underlay is hidden
     */
    const onHideUnderlay = () => {
      setActive(false);
    };

    return (
      <RNButton
        {...rest}
        onPress={disabled || loading ? undefined : onPress}
        style={computedStyle.button}
        underlayColor={underlayColor}
        onShowUnderlay={onShowUnderlay}
        onHideUnderlay={onHideUnderlay}>
        {loading === true ? (
          <RNView style={computedStyle.container}>
            <RNView
              style={{
                minHeight: getThemeProperty(theme.fontSize, loaderSize, 16),
              }}>
              <RNActivityIndicator
                size={getThemeProperty(theme.fontSize, loaderSize, 16)}
                color={getThemeProperty(theme.colors, loaderColor, '#e1e1e1')}
              />
            </RNView>
          </RNView>
        ) : (
          <RNAnimated.View style={computedStyle.container}>
            {typeof icon === 'string' ? (
              <Icon name={icon} {...computedStyle.icon} />
            ) : (
              icon
            )}
            {renderChildren()}
          </RNAnimated.View>
        )}
      </RNButton>
    );
  };

  /**
   * if the platform supports ripple, then use TouchableNativeFeedback
   */

  return <>{renderContainer()}</>;
};

Fab.defaultProps = {
  bg: 'blue600',
  p: 'lg',
  color: 'white',
  rounded: 'circle',
  position: 'absolute',
  bottom: 20,
  right: 20,
  loading: false,
  disabled: false,
  loaderSize: 'text400',
  loaderColor: 'gray400',
  block: false,
  shadowColor: 'gray800',
  shadow: 0,
  fontSize: 'text400',
  rippleColor: 'white',
  ripple: true,
  borderless: true,
  center: true,
  alignItems: 'center',
  justifyContent: 'center',
  onPress: () => {},
  flexDir: 'row',
  icon: 'plus',
};

export { Fab };
