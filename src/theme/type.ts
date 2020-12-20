export interface ThemeType {
  colors?: any;
  fontSize?: any;
  borderRadius?: any;
  spacing?: any;
  shadowColor?: any;
  shadow?: any;
  name?: string;
  breakpoints: BreakpointsType;
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
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  mx?: string | number;
  my?: string | number;
  ms?: string | number;
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  px?: string | number;
  py?: string | number;
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
  shadow?: string | number;
  shadowColor?: string;
}

export interface BreakpointsValueType<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export interface BreakpointsType {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export type ResponsiveType<T> = T | T[] | BreakpointsValueType<T>;
export type BreakpointType = 'sm' | 'md' | 'lg' | 'xl';

/** base style */
export type BaseTextAlignType =
  | 'auto'
  | 'left'
  | 'right'
  | 'center'
  | 'justify';
