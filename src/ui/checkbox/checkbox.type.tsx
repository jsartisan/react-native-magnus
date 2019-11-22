import { GestureResponderEvent as RNGestureResponderEvent } from "react-native";

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface CheckboxProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number;
  style?: any;
  onChange?: any;
  size?: string;
  onPress?: ((event: RNGestureResponderEvent) => void) | undefined;
  checked?: boolean;
  loading?: boolean;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  defaultChecked?: boolean;
}
