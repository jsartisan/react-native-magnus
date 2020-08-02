import { PressableProps as RNButtonProps } from 'react-native';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface OptionProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  bg?: string;
  position?: 'absolute' | 'relative';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  top?: number;
  flex?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  minW?: number | string;
  minH?: number | string;
  fontSize?: string | number;
  loaderSize?: number | string;
  suffix?: React.ReactNode;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: string;
  center?: boolean;
  ripple?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  selectedValue?: any;
}
