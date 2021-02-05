import { StyleProp, ViewStyle } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface SnackbarRef {
  show: () => void;
  hide: () => void;
}

export interface SnackbarProps
  extends BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    PositionPropsType,
    PrefixSuffixPropsType,
    DimensionPropsType,
    OpacityPropsType,
    FlexPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight'>,
    VariantPropsType {
  duration?: number;
  onDismiss?: () => void;
  style?: StyleProp<ViewStyle>;

  useNativeDriver?: boolean;
}
