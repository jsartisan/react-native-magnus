import * as React from "react";

import { ThemeType } from "./type";
import { computeTheme } from "./theme.service";
import { ThemeContext } from "./themeContext";

export interface ThemeProviderProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

export class ThemeProvider extends React.PureComponent<ThemeProviderProps> {
  public render(): React.ReactNode {
    const { theme, children } = this.props;

    return (
      <ThemeContext.Provider value={computeTheme(theme)}>
        {children}
      </ThemeContext.Provider>
    );
  }
}
