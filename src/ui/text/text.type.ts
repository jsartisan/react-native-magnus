import { TextProps as RNTextProps } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface TextProps
  extends RNTextProps,
    SpacingPropsType,
    RoundedPropsType,
    BorderPropsType {
  p?: any;
  h?: number | string;
  w?: number | string;
  bg?: string;
  flex?: number;
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  color?: string;
  fontSize?: string;
  textDecorLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorStyle?: "solid" | "double" | "dotted" | "dashed";
  fontStyle?: "normal" | "italic";
  textDecorColor?: string;
  fontWeight?: string;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: number;
  opacity?: number;
  overflow?: "hidden" | "visible" | "scroll";
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
  zIndex?: number;
}
