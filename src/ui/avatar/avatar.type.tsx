import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface AvatarProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  size?: number;
  color?: string;
  bg?: string;
  source?: RNImageSourcePropType;
  fontSize?: string;
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  zIndex?: number;
  opacity?: number;
}
