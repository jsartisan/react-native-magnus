import { ViewProps as RNViewProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface TooltipRef {
  hide: any;
  show: any;
}

export interface TooltipProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  bg?: string;
  h?: number;
  w?: number;
  minW?: number | string;
  minH?: number | string;
  maxW?: number | string;
  maxH?: number | string;
  animationDuration?: number;
  color?: string;
  opacity?: number;
  zIndex?: number;
  text: string | React.ReactNode;
  fontSize?: string;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: string;
  fontWeight?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  useNativeDriver?: boolean;
  children?: React.ReactNode[] | React.ReactNode;
}

export interface TriangelProps extends RNViewProps {
  invert: boolean;
}
