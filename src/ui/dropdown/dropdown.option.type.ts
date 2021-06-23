import { ButtonProps } from '../button/button.type';

export interface DropdownOptionProps extends ButtonProps {
  value: any;
  onSelect?: (value: any) => void;
}
