import { ViewProps as RNViewProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  PositionPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../types';
import { Option } from './select.option.component';

export interface CompoundedSelect
  extends React.ForwardRefExoticComponent<
    SelectProps & React.RefAttributes<SelectRef>
  > {
  Option: typeof Option;
}

export type SelectRef = {
  open: () => void;
  close: () => void;
};

export interface SelectProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    BackgroundPropsType,
    FlexPropsType,
    PositionPropsType,
    DimensionPropsType {
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;

  showScrollIndicator?: boolean;

  multiple?: boolean;
  value: any;
  footer?: React.ReactElement[] | React.ReactElement;
  onSelect: (value: any) => void;
  data: any[];
  renderItem: (item: any, index: number) => React.ReactElement;
  keyExtractor?: (item: any, index: number) => string;
  isVisible?: boolean;

  searchableProps?: '*' | string[];
  renderNoResultsView?: (searchTerm: string) => React.ReactElement;
  renderSubmitButton?: () => React.ReactElement;
  renderSearchInput?: (props: { clearText: () => void }) => React.ReactElement;
}
