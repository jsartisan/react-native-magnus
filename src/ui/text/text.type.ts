import { TextProps as RNTextProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../types';

export interface TextProps
  extends RNTextProps,
    SpacingPropsType,
    RoundedPropsType,
    BorderPropsType,
    TextPropsType,
    DimensionPropsType,
    OverflowPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<FlexPropsType, 'flex'> {}
