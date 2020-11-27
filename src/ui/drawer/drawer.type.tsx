import { ViewProps as RNViewProps } from 'react-native';
import { ModalProps as RNModalProps } from 'react-native-modal';

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
