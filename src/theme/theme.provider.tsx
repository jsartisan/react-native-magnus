import * as React from 'react';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';

import { ThemeType } from './type';
import { ThemeContext } from './theme.context';
import { useTheme } from './theme.hook';
import { calculateCurrentDeviceBreakpoint } from './theme.service';

export interface ThemeProviderProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (
  props: ThemeProviderProps
) => {
  const { theme: themeProp, children } = props;
  const theme = useTheme(themeProp);
  const { setTheme } = theme;

  useEffect(() => {
    /**
     * updates theme whenever orientation changes
     */
    const getDimension = () => {
      if (setTheme && theme?.theme?.breakpoints) {
        setTheme(theme.theme);
      }
    };

    Dimensions.addEventListener('change', getDimension);

    return () => {
      // Dimensions.removeEventListener('change', getDimension);
    };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
