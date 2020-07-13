import { Dimensions } from 'react-native';

import { ThemeType, BreakpointType } from './type';
import { defaultTheme } from '../style';

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

  if (customTheme.breakpoints) {
    computedTheme.breakpoints = customTheme.breakpoints;
    computedTheme.breakpoint = calculateCurrentDeviceBreakpoint(
      customTheme.breakpoints
    );
  }

  return computedTheme;
}

/**
 * m="10"
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
      computedStyle[styleProperty] = getThemeProperty(
        theme,
        props[propKey],
        props[propKey]
      );
    }
  });

  return computedStyle;
};

/**
 * create directional style for properties like
 * top, left, right, bottom, horizontal, vertical
 *
 * @param key
 * @param value
 */
export const createDirectionalStyles = (
  key: string,
  value: any,
  type: string = 'string'
) => {
  if (
    typeof (value.x || value.y || value.b || value.t || value.l || value.r) ===
    'undefined'
  ) {
    return createStyle(`${key}`, value, type);
  }

  let computedStyle = {};

  if (typeof value.x !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Horizontal`, value.x, type),
    };
  }

  if (typeof value.y !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Vertical`, value.y, type),
    };
  }

  if (typeof value.t !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Top`, value.t, type),
    };
  }

  if (typeof value.r !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Right`, value.r, type),
    };
  }

  if (typeof value.b !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Bottom`, value.b, type),
    };
  }

  if (typeof value.l !== 'undefined') {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Left`, value.l, type),
    };
  }

  return computedStyle;
};

/**
 * extract the theme property from theme

 * @param theme
 * @param value
 */
export const getThemeProperty = (theme: any, value: any, fallback: any) => {
  if (typeof theme[value] !== 'undefined') {
    return theme[value];
  }

  return fallback;
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
          computedStyle[property] = getThemeProperty(
            theme,
            props[propKey],
            props[propKey]
          );
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(
          theme,
          props[propKey],
          props[propKey]
        );
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
    borderRightColor: 'borderTopColor',
    borderLeftColor: 'borderLeftColor',
    borderBottomColor: 'borderBottomColor',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeProperty(
            theme,
            props[propKey],
            props[propKey]
          );
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(
          theme,
          props[propKey],
          props[propKey]
        );
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
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, 'white'),
    };
  }

  return computedStyle;
};

/**
 * create style object
 *
 * @param key
 * @param value
 */
export const createStyle = (key: string, value: any, type: string) => {
  return {
    [key]: type === 'number' ? Number(value) : value,
  };
};

/**
 *
 * @param props
 * @param computedStyle
 * @param styleProperty
 * @param atomicProperty
 * @param type
 */
export const addPropToComputedStyle = (
  props: any,
  computedStyle: any,
  styleProperty: string,
  atomicProperty: string,
  type: string
) => {
  if (props[atomicProperty]) {
    computedStyle = {
      ...computedStyle,
      ...createStyle(styleProperty, props[atomicProperty], type),
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

/**
 * position="absolute"
 * top={10}
 * w={[100%, 50%]}
 *  1005
 *  50
 * const DEFAULT_BREAKPOINTS = {
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1024,
};
 *
 * @param value
 */
export const createResponsiveStyle = (theme: ThemeType, value: any) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }

  if (!theme.breakpoints) {
    throw new Error('No breakpoints defined');
  }

  if (!theme.breakpoint) {
    throw new Error('Not able to calculate current breakpoint');
  }

  const currentBreakpointValue = theme.breakpoints[theme.breakpoint];

  // if prop is array like bg=["red500", "blue500"]
  if (Array.isArray(value)) {
    if (value.length === 1) return value[0];

    let currentValue = value[0];

    if (currentBreakpointValue) {
      value.forEach((propValue, index) => {
        if (
          currentBreakpointValue >=
          theme.breakpoints[Object.keys(theme.breakpoints)[index]]
        ) {
          currentValue = propValue;
        } else return;
      });
    }

    return currentValue;
  }

  // if prop is object like bg={{ sm: 'red500', lg: 'blue500'}}
  if (typeof value === 'object') {
    let currentValue = value[Object.keys(value)[0]];

    Object.keys(value).forEach((breakpointKey, index) => {
      if (currentBreakpointValue >= theme.breakpoints[breakpointKey]) {
        currentValue = value[breakpointKey];
      } else return;
    });

    return currentValue;
  }

  return value;
};

/**
 * calculates current device breakpoint
 *
 * @param breakpoints
 */
export const calculateCurrentDeviceBreakpoint = (
  breakpoints: BreakpointType,
  currentWidth: number = Dimensions.get('window').width
) => {
  let currentBreakpoint = Object.keys(breakpoints)[0];

  Object.keys(breakpoints).forEach((breakpointKey: string) => {
    const breakpointValue = breakpoints[breakpointKey];

    if (currentWidth > breakpointValue) {
      currentBreakpoint = breakpointKey;
    } else return;
  });

  return currentBreakpoint;
};
