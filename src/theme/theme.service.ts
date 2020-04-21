import { ThemeType } from "./type";
import { defaultTheme } from "../style";

/**
 * merge user theme with default theme
 *
 * @param customTheme
 *
 * @return computedTheme computed theme variables object
 */
export function computeTheme(customTheme: ThemeType | undefined): ThemeType {
  const computedTheme = { ...defaultTheme };

  console.log("renders");

  if (!customTheme) {
    return computedTheme;
  }

  if (customTheme.colors) {
    computedTheme.colors = {
      ...defaultTheme.colors,
      ...customTheme.colors
    };
  }

  if (customTheme.fontSize) {
    computedTheme.fontSize = {
      ...defaultTheme.fontSize,
      ...customTheme.fontSize
    };
  }

  if (customTheme.borderRadius) {
    computedTheme.borderRadius = {
      ...defaultTheme.borderRadius,
      ...customTheme.borderRadius
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
    p: "padding",
    pt: "paddingTop",
    pr: "paddingRight",
    pb: "paddingBottom",
    pl: "paddingLeft",
    px: "paddingHorizontal",
    py: "paddingVertical",
    m: "margin",
    mt: "marginTop",
    mr: "marginRight",
    mb: "marginBottom",
    ml: "marginLeft",
    mx: "marginHorizontal",
    my: "marginVertical"
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
  type: string = "string"
) => {
  if (
    typeof (value.x || value.y || value.b || value.t || value.l || value.r) ===
    "undefined"
  ) {
    return createStyle(`${key}`, value, type);
  }

  let computedStyle = {};

  if (typeof value.x !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Horizontal`, value.x, type)
    };
  }

  if (typeof value.y !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Vertical`, value.y, type)
    };
  }

  if (typeof value.t !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Top`, value.t, type)
    };
  }

  if (typeof value.r !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Right`, value.r, type)
    };
  }

  if (typeof value.b !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Bottom`, value.b, type)
    };
  }

  if (typeof value.l !== "undefined") {
    computedStyle = {
      ...computedStyle,
      ...createStyle(`${key}Left`, value.l, type)
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
  if (typeof theme[value] !== "undefined") {
    return theme[value];
  }

  return fallback;
};

/**
 * borderRadius={{ t: 10 }}
 *
 * @param value
 * @param theme
 */
export const createBorderRadiusStyles = (props: any, theme: any) => {
  let propKeys: any;

  propKeys = {
    rounded: "borderRadius",
    roundedTopLeft: "borderTopLeftRadius",
    roundedTopRight: "borderTopRightRadius",
    roundedBottomLeft: "borderBottomLeftRadius",
    roundedBottomRight: "borderBottomRightRadius",
    roundedTop: ["borderTopLeftRadius", "borderTopRightRadius"],
    roundedLeft: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    roundedRight: ["borderTopRightRadius", "borderBottomRightRadius"],
    roundedBottom: ["borderBottomLeftRadius", "borderBottomRightRadius"]
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach(property => {
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
    flex: "flex"
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
    borderWidth: "borderWidth",
    borderTopWidth: "borderTopWidth",
    borderLeftWidth: "borderLeftWidth",
    borderRightWidth: "borderRightWidth",
    borderBottomWidth: "borderBottomWidth"
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
    borderColor: "borderColor",
    borderTopColor: "borderTopColor",
    borderRightColor: "borderTopColor",
    borderLeftColor: "borderLeftColor",
    borderBottomColor: "borderBottomColor"
  };

  const computedStyle: any = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach(property => {
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
      shadowColor: getThemeProperty(theme.colors, props.shadowColor, "white")
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
    [key]: type === "number" ? Number(value) : value
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
      ...createStyle(styleProperty, props[atomicProperty], type)
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
    position: "position",
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom"
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
