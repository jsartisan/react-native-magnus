import * as React from 'react';
import { defaultTheme } from '../style';

import { ThemeType } from './type';

export interface ThemeContextType {
  theme: ThemeType;
}

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  {
    theme: defaultTheme,
  }
);
