import { ViewProps as RNViewProps } from 'react-native';
import { ModalProps as RNModalProps } from '../modal/modal.type';

import {
  BorderPropsType,
  RoundedPropsType,
  BackgroundPropsType,
} from '../../types';

export interface DrawerRef {
  close: () => void;
  open: () => void;
}

export interface DrawerProps
  extends RNModalProps,
    RNViewProps,
    BorderPropsType,
    RoundedPropsType,
    Pick<BackgroundPropsType, 'bg'> {
  direction?: 'left' | 'right';
  drawerPercentage?: number;
  animationTime?: number;
}
