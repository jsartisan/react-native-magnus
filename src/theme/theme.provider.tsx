import * as React from 'react';

import { ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { mergeRecursively } from '../utilities';
import { defaultTheme } from '../style';

export interface ThemeProviderProps {
  theme?: Partial<ThemeType>;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props
) => {
  const { theme: themeProp = {}, children } = props;
  const theme = mergeRecursively(defaultTheme, themeProp);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
