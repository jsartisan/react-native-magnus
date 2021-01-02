import { ViewProps as RNViewProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  OpacityPropsType,
} from '../../types';

export interface TooltipRef {
  hide: () => void;
  show: () => void;
}

export interface TooltipProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    TextPropsType,
    DimensionPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Pick<BackgroundPropsType, 'bg'> {
  animationDuration?: number;
  text: string | React.ReactNode;
  useNativeDriver?: boolean;
}

export interface TriangleProps extends RNViewProps {
  invert: boolean;
}
