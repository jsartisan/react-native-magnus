import { ImageProps as RNImageProps } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface ImageProps
  extends RNImageProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
  flex?: number;
  shadow?: number;
  shadowColor?: string;
  position?: "absolute" | "relative";
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  zIndex?: number;
}
