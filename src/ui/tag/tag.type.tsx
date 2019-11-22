import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

import { ViewProps as RNViewProps } from "react-native";

export interface TagProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  m?: any;
  p?: any;
  h?: number;
  color?: string;
  w?: number | string;
  bg?: string;
  minH?: number;
  minW?: number;
  rounded?: string;
  borderColor?: string;
  borderWidth?: number;
  fontSize?: string;
  textDecorLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textDecorStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorColor?: string;
  fontWeight?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  letterSpacing?: number;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  onPress?: (...args: any[]) => void;
  children?: React.ReactNode[] | React.ReactNode;
}
