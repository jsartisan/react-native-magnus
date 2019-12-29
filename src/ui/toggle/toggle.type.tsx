import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType
} from "../../theme";

export interface ToggleProps
  extends SpacingPropsType,
    RoundedPropsType,
    BorderPropsType {
  h?: number;
  w?: number;
  testID?: string;
  on: boolean;
  onPress: () => void;
  activeBg?: string;
  bg?: string;
  circleBg?: string;
  activeCircleBg?: string;
  duration?: number;
}
