import { StyleProp, ViewStyle } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

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
  bottom?: number;
  left?: number;
  top?: number;
  right?: number;
  w?: number;
  h?: number;
  minH?: number;
  minW?: number;
  maxH?: number;
  maxW?: number;
  opacity?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  position?: 'absolute' | 'relative';
  useNativeDriver?: boolean;
}
