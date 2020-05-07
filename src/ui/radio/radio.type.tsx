import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface RadioProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  value?: any;
  style?: any;
  color?: string;
  onChange?: any;
  size?: string;
  checked?: boolean;
  loading?: boolean;
  currentValue?: any;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
}
