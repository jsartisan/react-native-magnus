import React, { useState } from "react";

import { ThemeType } from "./type";
import { computeTheme } from "./theme.service";
import { ThemeContextType } from "./theme.context";

export const useTheme = (initialTheme?: ThemeType): ThemeContextType => {
  const [theme, setTheme] = useState(computeTheme(initialTheme));

  const setCurrentTheme = React.useCallback((newTheme?: ThemeType): void => {
    setTheme(computeTheme(newTheme));
  }, []);

  return {
    theme,
    setTheme: setCurrentTheme
  };
};
