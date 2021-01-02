import { ViewProps as RNViewProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../types';

export interface TagProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    PrefixSuffixPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    DimensionPropsType,
    TextPropsType {
  onPress?: (...args: any[]) => void;
}
