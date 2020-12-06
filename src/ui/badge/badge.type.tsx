import { ViewProps as RNViewProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface BadgeProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  h?: number | string;
  w?: number | string;
  bg?: string;
  minH?: number | string;
  minW?: number | string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  color?: string;
  fontSize?: string;
  count?: string | number;
  opacity?: number;
  zIndex?: number;
  children?: React.ReactNode[] | React.ReactNode;
}
