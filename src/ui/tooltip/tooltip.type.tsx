import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType
} from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface TooltipProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  animationDuration?: number;
  onHidden?: () => void;
  text: string | React.ReactNode;
}

export interface TriangelProps extends RNViewProps {
  invert: boolean;
}
