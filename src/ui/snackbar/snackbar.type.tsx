import { StyleProp, ViewStyle } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface SnackbarRefType {
  show: () => void;
  hide: () => void;
}

export interface SnackbarProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  color?: string;
  duration?: number;
  shadow?: number;
  fontSize?: string;
  shadowColor?: string;
  onDismiss?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}
