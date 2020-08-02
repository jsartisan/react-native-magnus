export interface ThemeType {
  colors?: any;
  fontSize?: any;
  borderRadius?: any;
  spacing?: any;
  shadowColor?: any;
  shadow?: any;
  name?: string;
  breakpoints: BreakpointsType;
  breakpoint: BreakpointType;
}

export interface BorderPropsType {
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number;
}

export interface SpacingPropsType {
  m?: ResponsiveType<string | number>;
  mt?: ResponsiveType<string | number>;
  mr?: ResponsiveType<string | number>;
  mb?: ResponsiveType<string | number>;
  ml?: ResponsiveType<string | number>;
  mx?: ResponsiveType<string | number>;
  my?: ResponsiveType<string | number>;
  ms?: ResponsiveType<string | number>;
  p?: ResponsiveType<string | number>;
  pt?: ResponsiveType<string | number>;
  pr?: ResponsiveType<string | number>;
  pb?: ResponsiveType<string | number>;
  pl?: ResponsiveType<string | number>;
  px?: ResponsiveType<string | number>;
  py?: ResponsiveType<string | number>;
}

export interface RoundedPropsType {
  rounded?: string | number;
  roundedTopLeft?: string | number;
  roundedTopRight?: string | number;
  roundedBottomLeft?: string | number;
  roundedBottomRight?: string | number;
  roundedTop?: string | number;
  roundedLeft?: string | number;
  roundedRight?: string | number;
  roundedBottom?: string | number;
}

export interface ShadowPropsType {
  shadow?: string;
  shadowColor?: string;
}

export type ResponsiveType<T> = T | T[] | BreakpointsValueType<T>;
export type BreakpointType = 'sm' | 'md' | 'lg' | 'xl';
export type BaseBgModeType = 'contain' | 'cover' | 'stretch' | 'repeat';

export type BaseJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type BaseAlignSelfType =
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';

export type BaseFlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';
export type BaseFlexWrapType = 'wrap' | 'nowrap' | 'wrap-reverse';
export type BasePositionType = 'absolute' | 'relative';
export type BaseAlignItemsType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
export type BaseOverflowType = 'hidden' | 'visible' | 'scroll';
export type BaseBorderStyleType = 'solid' | 'dotted' | 'dashed';

export type BaseDimensionType = string | number;

export interface BreakpointsType {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BreakpointsValueType<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}
