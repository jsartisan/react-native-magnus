import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createShadowStyles,
  createSpacingStyles,
  createPositionStyle,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
  getThemeColor,
} from '../../theme/theme.service';
import { RadioProps, RadioStates } from './radio.type';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (
  theme: ThemeType,
  props: RadioProps,
  extraProps: RadioStates
) => {
  const computedStyle: any = {};

  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
    backgroundColor: getThemeColor(theme.colors, props.bg),
  };

  computedStyle.text = {
    fontWeight: props.fontWeight,
    color: getThemeColor(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    lineHeight: getThemeProperty(theme.fontSize, props.fontSize) * 1.2,
  };

  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: getThemeProperty(theme.fontSize, props.loaderSize) * 1.2,
  };

  computedStyle.container = {
    flexDirection: props.flexDir,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    position: 'relative',
  };

  if (props.borderless === false) {
    computedStyle.button = {
      ...computedStyle.button,
      overflow: 'hidden',
    };
  }

  if (props.block) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
      alignSelf: 'stretch',
    };

    computedStyle.button = {
      ...computedStyle.button,
      alignSelf: 'stretch',
    };
  }

  computedStyle.highlightContainer = {
    backgroundColor: extraProps.focussed
      ? getThemeColor(theme.colors, props.highlightBg)
      : 'transparent',
    height: getThemeProperty(theme.fontSize, props.fontSize) + 5,
    width: getThemeProperty(theme.fontSize, props.fontSize) + 5,
    alignItems: 'center',
    justifyContent: 'center',
    ...createBorderRadiusStyles(props, theme.borderRadius),
    position: 'absolute',
    left: -2.5,
    top: -2.5,
  };

  computedStyle.icon = {
    zIndex: 2,
  };

  if (props.disabled) {
    computedStyle.icon = {
      ...computedStyle.icon,
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
