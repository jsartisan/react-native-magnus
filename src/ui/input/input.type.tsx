import { TextInputProps as RNTextInputProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  InputPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface InputProps
  extends RNTextInputProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    DimensionPropsType,
    LoadingPropsType,
    PrefixSuffixPropsType,
    ZIndexPropsType,
    OpacityPropsType,
    Pick<FlexPropsType, 'flex'>,
    Pick<BackgroundPropsType, 'bg'>,
    Omit<TextPropsType, 'textAlign'>,
    InputPropsType,
    VariantPropsType {}
