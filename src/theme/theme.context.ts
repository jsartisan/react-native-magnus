import * as React from 'react';
import { defaultTheme } from '../style';

import { ThemeType } from './type';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext: React.Context<ThemeContextType> =
  React.createContext({
    theme: defaultTheme,
    setTheme: (_theme: ThemeType) => {},
  });
