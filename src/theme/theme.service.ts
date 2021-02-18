import { ThemeType } from './type';
import { TextProps } from '../ui';
import { isValidColor } from '../utilities';

/**
 * create spacing styles from object of style props passed to magnus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export const createSpacingStyles = (
  props: any,
  theme: ThemeType['spacing']
) => {
  let propKeys: any;

  propKeys = {
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    ps: 'paddingStart',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ms: 'marginStart',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
    }
  });

  return computedStyle;
};

/**
 * get font weight font
 *
 * @param
 * @param fontFamily
 * @param fontWeight
 */
export const getFontWeight = (
  themeFontFamily: ThemeType['fontFamily'],
  fontFamily: TextProps['fontFamily'],
  fontWeight: TextProps['fontWeight']
) => {
  if (fontFamily === '' || !fontWeight) {
    return fontWeight;
  }

  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return 'normal';
    }
  }

  if (!fontFamily) {
    return fontWeight;
  }

  return 'normal';
};

/**
 * extract the fontFamily from theme

 * @param themeFontFamily
 * @param fontWeight
 */
export const getThemeFontFamily = (
  themeFontFamily: ThemeType['fontFamily'],
  fontWeight: TextProps['fontWeight'] = 'normal'
): string | undefined => {
  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return themeFontFamily[fontWeight];
    }
  }

  return undefined;
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param themeColors
 * @param value
 */
export const getThemeColor = (
  themeColors: ThemeType['colors'],
  value: string | undefined
): string => {
  if (themeColors && value) {
    if (typeof themeColors[value] !== 'undefined') {
      if (isValidColor(themeColors[value] as string)) {
        return themeColors[value] as string;
      }

      return getThemeColor(themeColors, themeColors[value] as string);
    }
  }

  return value as string;
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
export const getThemeProperty = (
  theme:
    | ThemeType['borderRadius']
    | ThemeType['fontSize']
    | ThemeType['shadow']
    | ThemeType['spacing']
    | undefined,
  value: any
) => {
  if (theme) {
    if (typeof theme[value] !== 'undefined') {
      return theme[value];
    }
  }
  return value;
};

/**
 * borderRadius="xl"
 *
 * @param value
 * @param theme
 */
export const createBorderRadiusStyles = (
  props: any,
  theme: ThemeType['borderRadius']
) => {
  let propKeys: any;

  propKeys = {
    rounded: 'borderRadius',
    roundedTopLeft: 'borderTopLeftRadius',
    roundedTopRight: 'borderTopRightRadius',
    roundedBottomLeft: 'borderBottomLeftRadius',
    roundedBottomRight: 'borderBottomRightRadius',
    roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
    roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeProperty(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
      }
    }
  });

  return computedStyle;
};

/**
 * adds flex property in styles
 *
 * @param props
 */
export const createFlexStyles = (props: any) => {
  let propKeys: any;

  propKeys = {
    flex: 'flex',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

/**
 * create borderWidth styles
 *
 * @param value
 */
export const createBorderWidthStyles = (props: any) => {
  let propKeys: any;

  propKeys = {
    borderWidth: 'borderWidth',
    borderStartWidth: 'borderStartWidth',
    borderEndWidth: 'borderEndWidth',
    borderTopWidth: 'borderTopWidth',
    borderLeftWidth: 'borderLeftWidth',
    borderRightWidth: 'borderRightWidth',
    borderBottomWidth: 'borderBottomWidth',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

/**
 * create borderRadius styles
 *
 * @param value
 */
export const createBorderColorStyles = (
  props: any,
  theme: ThemeType['colors']
) => {
  let propKeys: any;

  propKeys = {
    borderColor: 'borderColor',
    borderTopColor: 'borderTopColor',
    borderRightColor: 'borderRightColor',
    borderLeftColor: 'borderLeftColor',
    borderBottomColor: 'borderBottomColor',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeColor(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeColor(theme, props[propKey]);
      }
    }
  });

  return computedStyle;
};

/**
 * adds shadows property in styles
 *
 * @param props
 */
export const createShadowStyles = (props: any, theme: ThemeType) => {
  let computedStyle: any = {};

  if (props.shadow) {
    computedStyle = {
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
    };
  }

  return computedStyle;
};

/**
 * position="absolute"
 * top={10}
 *
 * @param value
 */
export const createPositionStyle = (props: any) => {
  let propKeys: any;

  propKeys = {
    position: 'position',
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};
