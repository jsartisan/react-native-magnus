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
    PrefixSuffixPropsType,
    DimensionPropsType,
    OpacityPropsType,
    FlexPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'color' | 'fontSize' | 'fontWeight'>,
    VariantPropsType {
  id?: string;
  duration?: number;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;

  useNativeDriver?: boolean;
}

export interface SnackbarContainerProps extends SnackbarProps {
  placement: 'top' | 'bottom';
}

export interface SnackbarContainerState {
  snackbars: Array<SnackbarProps & { message: string | JSX.Element }>;
}
