import * as React from 'react';

import { ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { defaultTheme } from '../style';
import deepmerge from 'deepmerge';

export interface ThemeProviderProps {
  theme?: Partial<ThemeType>;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props
) => {
  const { theme: themeProp = {}, children } = props;
  const theme = deepmerge(defaultTheme, themeProp);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
