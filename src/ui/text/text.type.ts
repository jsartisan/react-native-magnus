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
  h?: number;
  w?: number;
  bg?: string;
  flex?: number;
  minH?: number;
  minW?: number;
  color?: string;
  fontSize?: string;
  textDecorLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorColor?: string;
  fontWeight?: string;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: number;
}
