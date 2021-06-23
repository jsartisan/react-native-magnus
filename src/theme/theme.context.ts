import { Context, createContext } from 'react';
import { defaultTheme } from '../style';

import { ThemeType } from './type';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext: Context<ThemeContextType> = createContext({
  theme: defaultTheme,
  setTheme: (_theme: ThemeType) => {},
});
