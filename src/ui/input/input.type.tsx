import { TextInputProps as RNTextInputProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface InputProps
  extends RNTextInputProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  h?: number;
  w?: number;
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  bg?: string;
  fontSize?: string;
  lineHeight?: number;
  color?: string;
  loading?: boolean;
  loaderSize?: number | string;
  loaderColor?: string;
  flex?: number;
  focusBorderColor?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  zIndex?: number;
  opacity?: number;
  textAlign?: 'left' | 'right' | 'center';
}
