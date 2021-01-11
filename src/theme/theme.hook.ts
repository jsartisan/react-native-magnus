import { useContext } from 'react';

import { ThemeContext } from './theme.context';
import { ThemeType } from './type';

export const useTheme = (): ThemeType => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
