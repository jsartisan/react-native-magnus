import { ViewProps as RNViewProps } from 'react-native';
import {
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  BackgroundPropsType,
  VariantPropsType,
} from '../../types';

export interface BadgeProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    DimensionPropsType,
    PositionPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Pick<FlexPropsType, 'justifyContent' | 'alignItems' | 'alignSelf'>,
    Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight' | 'fontFamily'>,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  count?: string | number;
}
