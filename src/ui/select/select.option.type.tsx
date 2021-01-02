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
} from '../../types';

export interface OptionProps
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
    Pick<BackgroundPropsType, 'bg'>,
    DimensionPropsType,
    Pick<TextPropsType, 'color' | 'fontSize'> {
  center?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  selectedValue?: any;
}
