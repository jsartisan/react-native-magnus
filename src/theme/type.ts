export interface ThemeType {
  colors?: any;
  fontSize?: any;
  borderRadius?: any;
  spacing?: any;
  shadowColor?: any;
  shadow?: any;
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
}

export interface SpacingPropsType {
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  mx?: string | number;
  my?: string | number;
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
  shadow?: string;
  shadowColor?: string;
}
