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
  flex?: number;
  shadow?: number;
  shadowColor?: string;
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}
