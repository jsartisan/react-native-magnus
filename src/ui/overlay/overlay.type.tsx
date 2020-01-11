import { ModalProps as RNModalProps } from "react-native";

import { SpacingPropsType, RoundedPropsType } from "../../theme";

export interface OverlayProps
  extends RNModalProps,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  w?: string | number;
  h?: number | string;
  flex?: number;
  minH?: number;
  minW?: number;
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
  children: React.ReactElement[] | React.ReactElement;
  visible?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}
