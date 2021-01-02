import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import {
  getThemeProperty,
  createShadowStyles,
  createSpacingStyles,
  createBorderWidthStyles,
  createBorderColorStyles,
  createBorderRadiusStyles,
  createPositionStyle,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: ThemeType, props: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: props.flexDir,
    width: props.size,
    height: props.size,
    alignSelf: props.alignSelf,
    zIndex: props.zIndex,
    opacity: props.opacity,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.row = {
    backgroundColor: getThemeProperty(theme.colors, props.bg),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    zIndex: props.zIndex,
    opacity: props.opacity,
    ...createPositionStyle(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    textAlignVertical: 'center',
    textAlign: 'center',
  };

  computedStyle.image = {
    height: props.size,
    width: props.size,
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
