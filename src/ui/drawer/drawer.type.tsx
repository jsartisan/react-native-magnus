import { ViewProps as RNViewProps } from 'react-native';
import { ModalProps as RNModalProps } from '../modal/modal.type';

import { BorderPropsType, RoundedPropsType } from '../../theme';
export interface DrawerRef {
  close: any;
  open: any;
}
export interface DrawerProps
  extends RNModalProps,
    RNViewProps,
    BorderPropsType,
    RoundedPropsType {
  bg?: string;
  direction?: 'left' | 'right';
  drawerPercentage?: number;
  animationTime?: number;
}
