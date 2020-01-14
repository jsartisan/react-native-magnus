import { ViewProps as RNViewProps } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export type iconFontFamilyType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "FontAwesome5"
  | "Foundation"
  | "Ionicons"
  | "MaterialIcons"
  | "MaterialCommunityIcons"
  | "Octicons"
  | "Zocial"
  | "SimpleLineIcons";

export interface IconProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  minW?: number;
  minH?: number;
  maxH?: number;
  maxW?: number;
  bg?: string;
  name: string;
  color?: string;
  shadow?: number;
  shadowColor?: string;
  position?: "absolute" | "relaitve";
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  fontFamily?: iconFontFamilyType;
  fontSize?: string;
  zIndex?: number;
  opacity?: number;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
}
