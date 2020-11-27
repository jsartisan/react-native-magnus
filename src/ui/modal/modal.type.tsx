import { ModalProps as RNModalProps } from 'react-native-modal';

export type ModalRef = {
  open: () => void;
  close: () => void;
};

export interface ModalProps
  extends RNModalProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  h?: number | string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
