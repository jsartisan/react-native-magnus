import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType
} from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface DivProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  bg?: string;
  minH?: number;
  minW?: number;
  bgImg?: RNImageSourcePropType;
  bgMode?: "contain" | "cover" | "stretch";
  flex?: number;
  shadow?: number;
  shadowColor?: string;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  flexDir?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  children?: React.ReactNode[] | React.ReactNode;
  animation?: "fromRight" | "fromLeft" | "fromTop" | "fromBottom";
  duration?: number;
  delay?: number;
}
