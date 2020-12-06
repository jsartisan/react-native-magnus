import { ImageProps as RNImageProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface ImageProps
  extends RNImageProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  flex?: number;
  bg?: string;
  position?: 'absolute' | 'relative';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
  zIndex?: number;
}
