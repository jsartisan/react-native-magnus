import { TouchableHighlightProps as RNButtonProps } from 'react-native';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface ButtonProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  bg?: string;
  position?: 'absolute' | 'relative';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fontWeight?: string;
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
  prefix?: React.ReactNode;
  block?: boolean;
  shadow?: number;
  borderless?: boolean;
  rippleColor?: string;
  shadowColor?: string;
  ripple?: boolean;
  opacity?: number;
  zIndex?: number;
}
