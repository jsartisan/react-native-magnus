import { ModalProps as RNModalProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OverlayPropsType,
  SpacingPropsType,
  RoundedPropsType,
  VariantPropsType,
} from '../../types';

export interface OverlayRef {
  close: () => void;
  open: () => void;
}

export interface OverlayProps
  extends RNModalProps,
    SpacingPropsType,
    RoundedPropsType,
    OverlayPropsType,
    Pick<DimensionPropsType, 'w' | 'h' | 'minH' | 'minW'>,
    Pick<
      FlexPropsType,
      'flex' | 'justifyContent' | 'alignItems' | 'flexDir' | 'flexWrap'
    >,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  onBackdropPress?: () => void;
}
