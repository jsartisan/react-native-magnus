import { FlatListProps, ListRenderItemInfo } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface MentionProps
  extends FlatListProps<any>,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  trigger?: any;
  h?: number;
  loading?: boolean;
  triggerLocation: 'new-word-only' | 'anywhere';
  onChangeText: (value: string) => void;
  triggerCallback: (lastKeyword: string) => void;
  children: React.ReactElement;
  onHide?: () => void;
  maxRow: number;
  renderItem: (rowData: ListRenderItemInfo<any>) => any;
}
