import { ThemeType } from './type';
import { defaultTheme } from '../style';
import { TextProps } from '../ui';

/**
 * merge user theme with default theme
 *
 * @param customTheme
 *
 * @return computedTheme computed theme variables object
 */
export function computeTheme(customTheme: ThemeType | undefined): ThemeType {
  const computedTheme = { ...defaultTheme };

  if (!customTheme) {
    return computedTheme;
  }

  if (customTheme.colors) {
    computedTheme.colors = {
      ...defaultTheme.colors,
      ...customTheme.colors,
    };
  }

  if (customTheme.fontSize) {
    computedTheme.fontSize = {
      ...defaultTheme.fontSize,
      ...customTheme.fontSize,
    };
  }

  if (customTheme.borderRadius) {
    computedTheme.borderRadius = {
      ...defaultTheme.borderRadius,
      ...customTheme.borderRadius,
    };
  }

  if (customTheme.name) {
    computedTheme.name = customTheme.name;
  }

  return computedTheme;
}

/**
 * create spacing styles from object of style props passed to magnus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export const createSpacingStyles = (props: any, theme: any) => {
  let propKeys: any;

  propKeys = {
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
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
  if (!themeFontFamily) {
    return fontWeight;
  }

  if (fontFamily === '') {
    return fontWeight;
  }

  if (typeof themeFontFamily[fontWeight ?? 'normal'] !== 'undefined') {
    return 'normal';
  }

  return fontWeight;
};

/**
 * extract the fontFamily from theme

 * @param theme
 * @param index
 * @param fallbackValue
 */
export const getThemeFontFamily = (
  theme: ThemeType['fontFamily'],
  index: TextProps['fontWeight'] = 'normal',
  fallbackValue: any = undefined
) => {
  if (!theme) {
    return;
  }

  if (typeof theme[index] !== 'undefined') {
    return theme[index];
  }

  return fallbackValue;
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
export const getThemeProperty = (theme: any, value: any) => {
  if (typeof theme[value] !== 'undefined') {
    return theme[value];
  }

  return value;
};

/**
 * borderRadius="xl"
 *
 * @param value
 * @param theme
 */
export const createBorderRadiusStyles = (props: any, theme: any) => {
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
    borderTopWidth: 'borderTopWidth',
    borderEndWidth: 'borderEndWidth',
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
export const createBorderColorStyles = (props: any, theme: any) => {
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
 * adds shadows property in styles
 *
 * @param props
 */
export const createShadowStyles = (props: any, theme: any) => {
  let computedStyle: any = {};

  if (props.shadow) {
    computedStyle = {
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor),
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
