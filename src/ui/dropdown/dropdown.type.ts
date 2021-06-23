import { ModalProps } from '../modal/modal.type';

import { DropdownOption } from './dropdown.option.component';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OverflowPropsType,
  VariantPropsType,
} from '../../types';

export interface CompoundedDropdown
  extends React.ForwardRefExoticComponent<
    DropdownProps & React.RefAttributes<DropdownRef>
  > {
  Option: typeof DropdownOption;
}

export interface DropdownRef {
  open: () => void;
  close: () => void;
}

export interface DropdownProps
  extends ModalProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    DimensionPropsType,
    OverflowPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<
      FlexPropsType,
      'justifyContent' | 'alignItems' | 'flexDir' | 'flexWrap'
    >,
    VariantPropsType {
  title?: string | React.ReactNode;
  showSwipeIndicator?: boolean;
}
