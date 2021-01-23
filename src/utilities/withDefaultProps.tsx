import React from 'react';
import { ThemeContext, ThemeType } from '../theme';
import { DefaultProps } from '../types';

export function withDefaultProps<
  Props extends object,
  Defaults extends DefaultProps<Props> = {}
>(
  WrappedComponent: React.ComponentClass<Props & Defaults>,
  componentName: keyof NonNullable<ThemeType['components']>,
  defaultProps: Defaults
) {
  return class extends React.PureComponent<Props> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;

    render() {
      const theme = this.context.theme;

      // @ts-ignore
      const propsFromTheme: Partial<Props> =
        (theme.components && theme.components[componentName]) ?? {};

      const mergedProps = {
        ...defaultProps,
        ...propsFromTheme,
        ...this.props,
      };

      return <WrappedComponent {...mergedProps} />;
    }
  };
}
