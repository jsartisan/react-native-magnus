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
import { ThemeProps, VariantType } from '../types';

export interface ThemeType {
  components?: {
    Animated?: VariantType<AnimatedProps>;
    Avatar?: VariantType<AvatarProps>;
    AvatarGroup?: VariantType<AvatarGroupProps>;
    Badge?: VariantType<BadgeProps>;
    Button?: VariantType<ButtonProps>;
    Carousel?: VariantType<CarouselProps>;
    Checkbox?: VariantType<CheckboxProps>;
    CheckboxGroup?: VariantType<CheckboxGroupProps>;
    Collapse?: VariantType<CollapseProps>;
    CollapseHeader?: VariantType<CollapseHeaderProps>;
    CollapseBody?: VariantType<CollapseBodyProps>;
    CollapseGroup?: VariantType<CollapseGroupProps>;
    Div?: VariantType<DivProps>;
    Drawer?: VariantType<DrawerProps>;
    Dropdown?: VariantType<DropdownProps>;
    DropdownOption?: VariantType<DropdownOptionProps>;
    Fab?: VariantType<FabProps>;
    Header?: VariantType<HeaderProps>;
    Icon?: VariantType<IconProps>;
    Image?: VariantType<ImageProps>;
    Input?: VariantType<InputProps>;
    Mention?: VariantType<MentionProps>;
    Modal?: VariantType<ModalProps>;
    Overlay?: VariantType<OverlayProps>;
    Radio?: VariantType<RadioProps>;
    RadioGroup?: VariantType<RadioGroupProps>;
    ScrollDiv?: VariantType<ScrollDivProps>;
    Select?: VariantType<SelectProps>;
    SelectOption?: VariantType<SelectOptionProps>;
    Skeleton?: VariantType<SkeletonProps>;
    SkeletonCircle?: VariantType<SkeletonProps>;
    Snackbar?: VariantType<SnackbarProps>;
    Statusbar?: VariantType<StatusBarProps>;
    Tag?: VariantType<TagProps>;
    Text?: VariantType<TextProps>;
    Toggle?: VariantType<ToggleProps>;
    Tooltip?: VariantType<TooltipProps>;
    Textarea?: VariantType<TextareaProps>;
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
  borderRadius?: { none: 0; circle: 99999 } & ThemeProps<number>;
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
