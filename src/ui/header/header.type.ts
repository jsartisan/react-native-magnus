import { PrefixSuffixPropsType, TextPropsType } from '../../types';
import { DivProps } from '../div/div.type';

export interface HeaderProps
  extends DivProps,
    PrefixSuffixPropsType,
    TextPropsType {
  alignment?: 'center' | 'left';
}
