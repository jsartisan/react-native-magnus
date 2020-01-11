import { ViewProps as RNViewProps } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType
} from "../../theme";

export interface TooltipProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  bg?: string;
  h?: number;
  w?: number;
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  animationDuration?: number;
  onHidden?: () => void;
  opacity?: number;
  zIndex?: number;
  text: string | React.ReactNode;
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
}

export interface TriangelProps extends RNViewProps {
  invert: boolean;
}
