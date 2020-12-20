import { Dimensions } from 'react-native';
import { defaultTheme, DEFAULT_BREAKPOINTS } from '../style/defaultTheme';
import { ThemeType, BreakpointType, BreakpointsType } from './type';

/**
 * calculates current device breakpoint
 *
 * @param breakpoints
 */
export const calculateCurrentDeviceBreakpoint = (
  breakpoints: BreakpointsType,
  currentWidth: number = Dimensions.get('window').width
): BreakpointType => {
  const breakpointKeys = Object.keys(breakpoints) as Array<
    keyof typeof breakpoints
  >;
  let currentBreakpoint = breakpointKeys[0];

  breakpointKeys.forEach((breakpointKey: BreakpointType) => {
    const breakpointValue = breakpoints[breakpointKey];

    if (currentWidth > (breakpointValue || 0)) {
      currentBreakpoint = breakpointKey;
    } else {
      return;
    }
  });

  return currentBreakpoint;
};

const breakpoint: BreakpointType = calculateCurrentDeviceBreakpoint(
  DEFAULT_BREAKPOINTS
);

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
      computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
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
export const createResponsiveStyle = (
  value: string | number | BreakpointsType | Array<string | number>,
  theme: ThemeType
) => {
  if (typeof value === 'undefined') {
    return undefined;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }

  const currentBreakpointValue = theme.breakpoints[breakpoint];

  // if prop is array like bg=["red500", "blue500"]
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return value[0];
    }

    let currentValue = value[0];
    const breakpointKeys = Object.keys(theme.breakpoints) as Array<
      keyof typeof theme.breakpoints
    >;

    if (currentBreakpointValue) {
      value.forEach((propValue, index: number) => {
        if (!theme.breakpoints) {
          throw Error('asdas');
        }

        if (
          currentBreakpointValue >= theme.breakpoints[breakpointKeys[index]]
        ) {
          currentValue = propValue;
        } else {
          return;
        }
      });
    }

    return currentValue;
  }

  // if prop is object like bg={{ sm: 'red500', lg: 'blue500'}}
  if (typeof value === 'object' && value !== null) {
    const valueKeys = Object.keys(value) as Array<keyof typeof value>;
    let currentValue = value[valueKeys[0]];

    if (currentBreakpointValue) {
      valueKeys.forEach((breakpointKey: BreakpointType) => {
        if (currentBreakpointValue >= theme.breakpoints[breakpointKey]) {
          currentValue = value[breakpointKey];
        } else {
          return;
        }
      });
    }

    return currentValue;
  }

  throw Error('Could not compute');
};
