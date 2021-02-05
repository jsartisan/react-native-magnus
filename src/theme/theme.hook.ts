import { useContext } from 'react';

import { ThemeContext, ThemeContextType } from './theme.context';

export const useTheme = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
