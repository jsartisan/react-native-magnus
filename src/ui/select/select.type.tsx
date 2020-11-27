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

export type SelectRef = {
  open: () => void;
  close: () => void;
};

export interface SelectProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  h?: number | string;
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
  w?: number | string;
  bg?: string;
  minH?: number | string;
  minW?: number | string;
  bgImg?: RNImageSourcePropType;
  showScrollIndicator?: boolean;
  bgMode?: 'contain' | 'cover' | 'stretch';
  flex?: number;
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
  multiple?: boolean;
  value: any;
  footer?: React.ReactElement[] | React.ReactElement;
  onSelect: (value: any) => void;
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
  keyExtractor?: (item: any, index: number) => string;
}
