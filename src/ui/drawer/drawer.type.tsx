import { ViewProps as RNViewProps } from "react-native";

import { BorderPropsType, RoundedPropsType } from "../../theme";

export interface DrawerProps
  extends RNViewProps,
    BorderPropsType,
    RoundedPropsType {
  bg?: string;
  direction?: "left" | "right";
  drawerPercentage?: number;
  animationTime?: number;
  backdropColor?: string;
  children?: React.ReactNode[] | React.ReactNode;
}
