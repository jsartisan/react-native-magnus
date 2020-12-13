import { StyleProp, ViewStyle } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface SnackbarRef {
  show: () => void;
  hide: () => void;
}

export interface SnackbarProps
  extends BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  bg?: string;
  color?: string;
  duration?: number;
  fontSize?: string;
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
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
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
