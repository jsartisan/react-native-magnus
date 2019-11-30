import * as React from 'react';
import { ThemeContext } from './themeContext';

/**
 * passes theme to prop of Component
 *
 * @param Component
 */
export const withTheme = (Component: React.ComponentType) => (props: any) => (
  <ThemeContext.Consumer>
    {contexts => <Component {...props} {...contexts} />}
  </ThemeContext.Consumer>
);
