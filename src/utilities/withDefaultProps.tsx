import React from 'react';
import deepmerge from 'deepmerge';
import { ThemeContext, ThemeType } from '../theme';

export function withDefaultProps<T>(
  WrappedComponent: unknown,
  componentName: keyof NonNullable<ThemeType['components']>
) {
  return function wrapWithStyledComponent(defaultProps: Partial<T>) {
    return class extends React.PureComponent {
      static contextType = ThemeContext;
      context!: React.ContextType<typeof ThemeContext>;

      render() {
        const theme = this.context.theme;
        // @ts-ignore
        const propsFromTheme: Partial<T> =
          (theme.components && theme.components[componentName]) ?? {};

        // @ts-ignore
        const mergedProps: T & Required<typeof defaultProps> = deepmerge(
          deepmerge(defaultProps, propsFromTheme),
          this.props
        );
        // @ts-ignore
        return <WrappedComponent {...mergedProps} />;
      }
    };
  };
}
