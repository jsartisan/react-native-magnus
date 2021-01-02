import * as React from 'react';

import { ThemeType } from './type';
import { useTheme } from './theme.hook';
import { ThemeContext } from './theme.context';

export interface ThemeProviderProps {
  theme?: ThemeType;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props
) => {
  const { theme: themeProp, children } = props;
  const theme = useTheme(themeProp);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
