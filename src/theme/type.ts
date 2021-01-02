type ThemeProps<T> = {
  [name: string]: T;
};
export interface ThemeType {
  colors?: ThemeProps<string>;
  fontSize?: ThemeProps<number>;
  borderRadius?: ThemeProps<number>;
  spacing?: ThemeProps<number>;
  shadowColor?: string;
  shadow?: {
    [name: string]: {
      shadowOffset?: {
        width: number;
        height: number;
      };
      shadowOpacity?: number;
      shadowRadius?: number;
      elevation?: number;
    };
  };
  name?: string;
}
