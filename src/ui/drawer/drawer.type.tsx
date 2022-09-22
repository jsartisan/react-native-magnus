import { ViewProps as RNViewProps } from 'react-native';
import { ModalProps as RNModalProps } from '../modal/modal.type';

import {
  BorderPropsType,
  RoundedPropsType,
  BackgroundPropsType,
  VariantPropsType,
} from '../../types';

export interface DrawerRef {
  close: () => void;
  open: () => void;
}

export interface DrawerProps
  extends Omit<RNModalProps, 'children'>,
    RNViewProps,
    BorderPropsType,
    RoundedPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  direction?: 'left' | 'right';
  drawerPercentage?: number;
  animationTime?: number;
}
