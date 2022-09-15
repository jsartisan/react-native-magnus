import * as React from 'react';
import { ThemeContext } from './theme.context';

/**
 * passes theme to prop of Component
 *
 * @param Component
 */
export const withTheme = (Component: React.ComponentType) => (props: any) =>
  (
    <ThemeContext.Consumer>
      {(contexts) => {
        return <Component {...props} theme={{ ...contexts }} />;
      }}
    </ThemeContext.Consumer>
  );
