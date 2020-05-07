import * as React from 'react';

import { ThemeType } from './type';

const defaultValue: ThemeType = {};

export interface ThemeContextType {
  theme: ThemeType;
  setTheme?: (theme?: ThemeType) => void;
}

export const THEME_CONTEXT_DEFAULT_VALUE = {
  theme: defaultValue,
};

export const ThemeContext: React.Context<ThemeContextType> = React.createContext(
  THEME_CONTEXT_DEFAULT_VALUE
);
