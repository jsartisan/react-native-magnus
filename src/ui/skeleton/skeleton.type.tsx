import { ViewProps as RNViewProps } from "react-native";

import { SpacingPropsType } from "../../theme";

export interface SkeletonProps extends RNViewProps, SpacingPropsType {
  bg?: string;
  count?: number;
  avatar?: boolean;
}
