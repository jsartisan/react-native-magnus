import { ButtonProps } from '../button/button.type';

export interface OptionProps extends ButtonProps {
  value: any;
  onSelect?: (value: any) => void;
}
