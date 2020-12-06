import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import {
  View as RNView,
  Pressable as RNButton,
  GestureResponderEvent as RNGestureResponderEvent,
} from 'react-native';

import { ThemeContext } from '../../theme';
import { getStyle } from './checkbox.style';
import { isFunction } from '../../utilities';
import { getIcon } from './checkbox.service';
import { CheckboxGroup } from './group.component';
import { CompundedCheckbox, CheckboxProps } from './checkbox.type';

const Checkbox: CompundedCheckbox<CheckboxProps> = (props) => {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
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
    borderEndWidth,
    shadow,
    borderless,
    shadowColor,
    block,
    alignSelf,
    activeIcon,
    inactiveIcon,
    onChange,
    value,
    activeColor,
    inactiveColor,
    defaultChecked,
    checked: checkedProp,
    onPress: onPressProp,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(
    ('checked' in props ? checkedProp : props.defaultChecked) || false
  );
  const [focussed, setFocussed] = useState(false);
  const computedStyle = getStyle(theme, props, { focussed });

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked || false);
    }
  }, [props]);

  /**
   * on press checkbox
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (disabled) {
      return;
    }

    if (!('checked' in props)) {
      setChecked(!checked);
    }

    if (isFunction(onPressProp)) {
      onPressProp(event);
    }

    // if onChange prop is a valid function, call it
    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setFocussed(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setFocussed(false);
  };

  const renderChildren = () => {
    if (isFunction(children)) {
      return children({ focussed, disabled, checked, loading });
    }

    return (
      <>
        {prefix}
        <RNView>
          <RNView style={computedStyle.highlightContainer} />
          <RNView style={computedStyle.icon}>{icon}</RNView>
        </RNView>
        {children}
        {suffix}
      </>
    );
  };

  const icon = getIcon(theme, props, checked);

  return (
    <RNButton
      {...rest}
      style={computedStyle.button}
      onPress={disabled || loading ? undefined : onPress}
      onPressIn={disabled || loading ? undefined : onPressIn}
      onPressOut={disabled || loading ? undefined : onPressOut}
    >
      <RNView style={computedStyle.container}>{renderChildren()}</RNView>
    </RNButton>
  );
};

Checkbox.defaultProps = {
  defaultChecked: false,
  activeColor: 'blue600',
  inactiveColor: 'gray500',
  highlightBg: 'gray300',
  bg: 'transparent',
  p: 'none',
  color: 'white',
  rounded: 'md',
  loading: false,
  disabled: false,
  loaderSize: 'md',
  loaderColor: 'gray400',
  block: false,
  position: 'relative',
  shadowColor: 'gray800',
  shadow: 0,
  fontSize: '5xl',
  borderless: true,
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  onPress: () => {},
  flexDir: 'row',
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
