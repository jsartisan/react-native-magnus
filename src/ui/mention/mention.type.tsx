import { FlatListProps, ListRenderItemInfo } from 'react-native';
import {
  BackgroundPropsType,
  LoadingPropsType,
  PositionPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface MentionProps
  extends FlatListProps<any>,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    PositionPropsType,
    Pick<LoadingPropsType, 'loading'>,
    Pick<BackgroundPropsType, 'bg'>,
    VariantPropsType {
  trigger?: any;
  h?: number;
  triggerLocation: 'new-word-only' | 'anywhere';
  onChangeText: (value: string) => void;
  triggerCallback: (lastKeyword: string) => void;
  children: React.ReactElement;
  onHide?: () => void;
  maxRow: number;
  renderItem: (rowData: ListRenderItemInfo<any>) => any;
}
