import { StatusBarProps } from 'react-native';
import {
  AvatarProps,
  BadgeProps,
  ButtonProps,
  CheckboxProps,
  CollapseProps,
  DivProps,
  DrawerProps,
  DropdownProps,
  FabProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  MentionProps,
  ModalProps,
  OverlayProps,
  RadioProps,
  ScrollDivProps,
  SelectProps,
  SkeletonProps,
  SnackbarProps,
  TagProps,
  TextProps,
  TextareaProps,
  ToggleProps,
  TooltipProps,
  CarouselProps,
  AnimatedProps,
} from '../ui';

import { AvatarGroupProps } from '../ui/avatar/avatar.group.type';
import {
  CollapseBodyProps,
  CollapseGroupProps,
  CollapseHeaderProps,
} from '../ui/collapse/collapse.type';
import { DropdownOptionProps } from '../ui/dropdown/dropdown.option.type';
import { CheckboxGroupProps } from '../ui/checkbox/checkbox.type';
import { RadioGroupProps } from '../ui/radio/radio.type';
import { SelectOptionProps } from '../ui/select/select.option.type';

type ThemeProps<T> = {
  [name: string]: T;
};

export interface ThemeType {
  components?: {
    Animated?: Partial<AnimatedProps>;
    Avatar?: Partial<AvatarProps>;
    AvatarGroup?: Partial<AvatarGroupProps>;
    Badge?: Partial<BadgeProps>;
    Button?: Partial<ButtonProps>;
    Carousel?: Partial<CarouselProps>;
    Checkbox?: Partial<CheckboxProps>;
    CheckboxGroup?: Partial<CheckboxGroupProps>;
    Collapse?: Partial<CollapseProps>;
    CollapseHeader?: Partial<CollapseHeaderProps>;
    CollapseBody?: Partial<CollapseBodyProps>;
    CollapseGroup?: Partial<CollapseGroupProps>;
    Div?: Partial<DivProps>;
    Drawer?: Partial<DrawerProps>;
    Dropdown?: Partial<DropdownProps>;
    DropdownOption?: Partial<DropdownOptionProps>;
    Fab?: Partial<FabProps>;
    Header?: Partial<HeaderProps>;
    Icon?: Partial<IconProps>;
    Image?: Partial<ImageProps>;
    Input?: Partial<InputProps>;
    Mention?: Partial<MentionProps>;
    Modal?: Partial<ModalProps>;
    Overlay?: Partial<OverlayProps>;
    Radio?: Partial<RadioProps>;
    RadioGroup?: Partial<RadioGroupProps>;
    ScrollDiv?: Partial<ScrollDivProps>;
    Select?: Partial<SelectProps>;
    SelectOption?: Partial<SelectOptionProps>;
    Skeleton?: Partial<SkeletonProps>;
    SkeletonCircle?: Partial<SkeletonProps>;
    Snackbar?: Partial<SnackbarProps>;
    Statusbar?: Partial<StatusBarProps>;
    Tag?: Partial<TagProps>;
    Text?: Partial<TextProps>;
    Toggle?: Partial<ToggleProps>;
    Tooltip?: Partial<TooltipProps>;
    Textarea?: Partial<TextareaProps>;
  };

  fontFamily?: {
    normal?: string;
    bold?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  };

  colors?: ThemeProps<string>;
  fontSize?: ThemeProps<number>;
  borderRadius?: { none: 0; circle: 1000000 } & ThemeProps<number>;
  spacing?: { none: 0 } & ThemeProps<number>;
  shadowColor?: string;
  shadow?: ThemeProps<{
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  }>;
  name?: string;
}
