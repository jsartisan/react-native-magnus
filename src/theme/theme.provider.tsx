import * as React from 'react';

import { ThemeType } from './type';
import { useTheme } from './theme.hook';
import { ThemeContext } from './theme.context';

export interface ThemeProviderProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props: ThemeProviderProps
) => {
  const { theme: themeProp, children } = props;
  const theme = useTheme(themeProp);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
