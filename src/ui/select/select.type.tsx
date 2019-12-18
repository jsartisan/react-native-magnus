import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface SelectProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  h?: number | string;
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  w?: number | string;
  bg?: string;
  minH?: number;
  minW?: number;
  bgImg?: RNImageSourcePropType;
  showScrollIndicator?: boolean;
  bgMode?: 'contain' | 'cover' | 'stretch';
  flex?: number;
  shadow?: number;
  shadowColor?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  multiple: boolean;
  value: any;
  children: React.ReactElement[] | React.ReactElement;
  footer: React.ReactElement[] | React.ReactElement;
  onSelect: (value: any) => void;
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
}
