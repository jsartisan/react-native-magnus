import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    minHeight: typeof props.count === 'undefined' ? 10 : 35,
    minWidth: typeof props.count === 'undefined' ? 10 : 35,
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.div = {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    minHeight: typeof props.count === 'undefined' ? 10 : 35,
    minWidth: typeof props.count === 'undefined' ? 10 : 35,
    zIndex: 9999,
  };

  computedStyle.text = {
    color: props.color,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    paddingHorizontal: 6,
  };

  if (props.shadow) {
    computedStyle.div = {
      ...computedStyle.div,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, 'white'),
    };
  }

  if (props.h) {
    computedStyle.div = {
      ...computedStyle.div,
      height: props.h,
    };
  }

  if (props.w) {
    computedStyle.div = {
      ...computedStyle.div,
      width: props.w,
    };
  }

  if (props.top) {
    computedStyle.div = {
      ...computedStyle.div,
      top: props.top,
    };
  }

  if (props.right) {
    computedStyle.div = {
      ...computedStyle.div,
      right: props.right,
    };
  }

  if (props.bottom) {
    computedStyle.div = {
      ...computedStyle.div,
      bottom: props.bottom,
    };
  }

  if (props.left) {
    computedStyle.div = {
      ...computedStyle.div,
      left: props.left,
    };
  }

  if (props.minH) {
    computedStyle.div = {
      ...computedStyle.div,
      minHeight: props.minH,
    };
  }

  if (props.minW) {
    computedStyle.div = {
      ...computedStyle.div,
      minWidth: props.minW,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
