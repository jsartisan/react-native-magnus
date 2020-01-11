import { TextInputProps as RNTextInputProps } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface InputProps
  extends RNTextInputProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
  bg?: string;
  fontSize?: string;
  lineHeight?: number;
  color?: string;
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
  shadow?: number;
  flex?: number;
  shadowColor?: string;
  focusBorderColor?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  zIndex?: number;
  opacity?: number;
}
