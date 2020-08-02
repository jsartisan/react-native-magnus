import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createBorderWidthStyles,
  createBorderColorStyles,
  createSpacingStyles,
  createFlexStyles,
  createBorderRadiusStyles,
  createPositionStyle,
  createShadowStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any, state: any) => {
  const computedStyle: any = {};

  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: props.zIndex,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    width: props.w,
    height: props.h,
    opacity: props.opacity,
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'white'),
    ...createFlexStyles(props),
    ...createBorderWidthStyles(props),
    ...createShadowStyles(props, theme),
    ...createPositionStyle(props),
    ...createSpacingStyles(props, theme),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  if (state.isFocussed) {
    computedStyle.container = {
      ...computedStyle.container,
      borderColor: getThemeProperty(
        theme.colors,
        props.focusBorderColor,
        computedStyle.container.borderColor
      ),
    };
  }

  computedStyle.input = {
    flex: 1,
    padding: 0,
    textAlignVertical: 'center',
    color: getThemeProperty(theme.colors, props.color, 'black'),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
  };

  computedStyle.suffix = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: props.suffix && props.suffix.props.alignSelf,
    marginLeft: 5,
  };

  computedStyle.prefix = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    alignSelf: props.prefix && props.prefix.props.alignSelf,
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
