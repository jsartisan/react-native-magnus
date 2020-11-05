import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createFlexStyles,
  createShadowStyles,
  createPositionStyle,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
} from '../../theme/theme.service';

/**
 * computed styles
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: props.row ? 'row' : props.flexDir,
    flexWrap: props.flexWrap,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createFlexStyles(props),
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.image = {
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  computedStyle.center = {};

  if (props.suffix) {
    computedStyle.suffix = {
      zIndex: 1,
      flexDirection: 'row',
    };
  }

  if (props.prefix) {
    computedStyle.prefix = {
      flexDirection: 'row',
      zIndex: 1,
    };
  }

  if (props.alignment === 'center') {
    computedStyle.center = {
      ...computedStyle.center,
      justifyContent: 'center',
      alignItems: 'center',
    };

    computedStyle.container = {
      ...computedStyle.container,
      justifyContent: 'space-between',
    };

    if (props.suffix || props.prefix) {
      computedStyle.center = {
        ...computedStyle.center,
        ...StyleSheet.absoluteFillObject,
      };
    }
  } else {
    computedStyle.suffix = {
      ...computedStyle.suffix,
      flex: 1,
      justifyContent: 'flex-end',
    };
  }

  return StyleSheet.create(computedStyle);
};
