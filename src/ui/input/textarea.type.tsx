import { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextareaProps extends RNTextInputProps {
  h?: number;
  w?: number;
  m?: any;
  p?: any;
  borderColor?: string;
  focusBorderColor?: string;
  borderWidth?: number;
  borderRadius?: any;
  minW?: number | string;
  minH?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}
