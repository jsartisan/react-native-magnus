import * as React from 'react';
import { ActivityIndicator } from 'react-native';

import { ThemeType } from '../..//theme';
import { Icon } from '../icon/icon.component';
import { CheckboxProps } from './checkbox.type';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';

/**
 * get icon name based on state
 */
export const getIconName = (
  checked: boolean = false,
  disabled: boolean = false
) => {
  switch (true) {
    case disabled:
      return 'indeterminate-check-box';
    case checked:
      return 'check-box';
    default:
      return 'check-box-outline-blank';
  }
};

/**
 * get icon name
 *
 * @param checked
 * @param disabled
 */
export const getIconColor = (
  checked: any,
  disabled: any,
  activeColor: any,
  inactiveColor: any,
  theme: ThemeType
) => {
  switch (true) {
    case disabled:
      return getThemeColor(theme.colors, inactiveColor);
    case checked:
      return getThemeColor(theme.colors, activeColor);
    default:
      return getThemeColor(theme.colors, inactiveColor);
  }
};

/*
 * get icon
 * shows activity indication if loading state is true
 */
export const getIcon = (
  theme: ThemeType,
  props: CheckboxProps,
  checked: boolean
) => {
  const {
    fontSize,
    loaderColor,
    activeIcon,
    activeColor,
    inactiveColor,
    disabled,
    inactiveIcon,
  } = props;

  const iconName = getIconName(checked, disabled ?? false);
  const iconColor = getIconColor(
    checked,
    disabled,
    activeColor,
    inactiveColor,
    theme
  );

  if (props.loading) {
    return (
      <ActivityIndicator
        size={getThemeProperty(theme.fontSize, fontSize)}
        color={getThemeColor(theme.colors, loaderColor)}
        style={{ zIndex: 2, position: 'relative' }}
      />
    );
  }

  if (checked) {
    if (props.activeIcon && typeof activeIcon === 'string') {
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

    if (props.activeIcon) {
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
