import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import {
  View as RNView,
  ActivityIndicator,
  Pressable as RNButton,
  GestureResponderEvent as RNGestureResponderEvent,
} from 'react-native';

import { ThemeContext } from '../../theme';
import { getStyle } from './checkbox.style';
import { Icon } from '../icon/icon.component';
import { ICheckbox, ICheckboxProps } from './checkbox.type';
import { getThemeProperty } from '../../theme/theme.service';
import { getIconName, getIconColor } from './checkbox.service';
import { CheckboxGroup } from './group.component';
import { isFunction } from '../../utilities';

const Checkbox: ICheckbox<ICheckboxProps> = (props) => {
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
    renderer,
    checked: checkedProp,
    onPress: onPressProp,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(
    'checked' in props ? checkedProp : props.defaultChecked
  );
  const [focussed, setFocussed] = useState(false);
  const computedStyle = getStyle(theme, props, { focussed });

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked);
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

  const iconName = getIconName(checked, disabled);
  const iconColor = getIconColor(
    checked,
    disabled,
    activeColor,
    inactiveColor,
    theme
  );

  /**
   * get icon
   * shows activity indication if loading state is true
   */
  const getIcon = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size={getThemeProperty(theme.fontSize, fontSize)}
          color={getThemeProperty(theme.colors, activeColor)}
          style={{ zIndex: 2, position: 'relative' }}
        />
      );
    }

    if (checked) {
      if (activeIcon && typeof activeIcon === 'string') {
        return (
          <Icon
            name={activeIcon}
            color={iconColor}
            style={{ zIndex: 2, position: 'relative' }}
            fontFamily="AntDesign"
            fontSize={fontSize}
          />
        );
      }

      if (activeIcon) {
        return activeIcon;
      }
    } else {
      if (inactiveIcon && typeof inactiveIcon === 'string') {
        return (
          <Icon
            name={inactiveIcon}
            color={iconColor}
            style={{ zIndex: 2, position: 'relative' }}
            fontFamily="AntDesign"
            fontSize={fontSize}
          />
        );
      }

      if (inactiveIcon) {
        return inactiveIcon;
      }
    }

    return (
      <Icon
        name={iconName}
        color={iconColor}
        style={{ zIndex: 2, position: 'relative' }}
        fontFamily="MaterialIcons"
        fontSize={fontSize}
      />
    );
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

  const icon = getIcon();

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

// passing RadioGroup as part of Radio
Checkbox.Group = CheckboxGroup;

export { Checkbox };
