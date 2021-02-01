import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { SelectOptionProps } from './select.option.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: SelectOptionProps) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: props.position,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    ...createSpacingStyles(props, theme.spacing),
  };

  computedStyle.text = {
    color: getThemeColor(theme.colors, props.color),
    textAlign: 'right',
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
  };

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  if (props.shadow) {
    computedStyle.button = {
      ...computedStyle.button,
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
    };
  }

  if (props.block) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
    };
  }

  if (props.w) {
    computedStyle.button = {
      ...computedStyle.button,
      width: props.w,
    };
  }

  if (props.h) {
    computedStyle.button = {
      ...computedStyle.button,
      height: props.h,
    };
  }

  if (props.top) {
    computedStyle.button = {
      ...computedStyle.button,
      top: props.top,
    };
  }

  if (props.right) {
    computedStyle.button = {
      ...computedStyle.button,
      right: props.right,
    };
  }

  if (props.bottom) {
    computedStyle.button = {
      ...computedStyle.button,
      bottom: props.bottom,
    };
  }

  if (props.left) {
    computedStyle.button = {
      ...computedStyle.button,
      left: props.left,
    };
  }

  if (props.borderColor) {
    computedStyle.button = {
      ...computedStyle.button,
      borderColor: getThemeColor(theme.colors, props.borderColor),
    };
  }

  if (props.borderWidth) {
    computedStyle.button = {
      ...computedStyle.button,
      borderWidth: props.borderWidth,
    };
  }

  if (props.rounded) {
    computedStyle.button = {
      ...computedStyle.button,
      ...createBorderRadiusStyles(props.rounded, theme.borderRadius),
    };
  }

  if (props.disabled) {
    computedStyle.button = {
      ...computedStyle.button,
      opacity: 0.5,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
