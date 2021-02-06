import { ScrollViewProps as RNScrollViewProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface ScrollDivProps
  extends RNScrollViewProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    FlexPropsType,
    PositionPropsType,
    DimensionPropsType,
    BackgroundPropsType,
    VariantPropsType {}
