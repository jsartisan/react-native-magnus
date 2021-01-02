type ThemeProps<T> = {
  [name: string]: T;
};
export interface ThemeType {
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
