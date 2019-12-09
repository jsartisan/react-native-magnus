import { ModalProps as RNModalProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface OverlayProps
  extends RNModalProps,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  w?: string | number;
  children: React.ReactElement[] | React.ReactElement;
  visible?: boolean;
}
