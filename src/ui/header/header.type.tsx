import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface HeaderProps
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
  maxH?: number | string;
  maxW?: number | string;
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch';
  flex?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  position?: 'absolute' | 'relative';
  overflow?: 'hidden' | 'visible' | 'scroll';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  children?: React.ReactNode[] | React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  row?: boolean;
  zIndex?: number;
  alignment?: 'center' | 'left';

  color?: string;
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
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}
