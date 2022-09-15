import { ReactNode } from 'react';
import { PressableProps as RNButtonProps } from 'react-native';
import {
  BackgroundPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface SelectOptionProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    LoadingPropsType,
    PositionPropsType,
    DisabledPropsType,
    FlexPropsType,
    ButtonPropsType,
    Pick<PrefixSuffixPropsType, 'prefix'>,
    Pick<PrefixSuffixPropsType, 'suffix'>,
    Pick<BackgroundPropsType, 'bg'>,
    DimensionPropsType,
    Pick<TextPropsType, 'color' | 'fontSize'>,
    VariantPropsType {
  center?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  selectedValue?: any;
  children: ReactNode;
}
