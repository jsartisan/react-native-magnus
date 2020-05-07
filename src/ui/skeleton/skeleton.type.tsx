import { ViewProps as RNViewProps } from 'react-native';

import { SpacingPropsType, RoundedPropsType } from '../../theme';

export interface SkeletonProps
  extends RNViewProps,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  h?: number | string;
  w?: number | string;
  flex?: number;
}
