import React from 'react';
import { ThemeContext, ThemeType } from '../theme';
import { DefaultProps, VariantPropsType } from '../types';

export function withDefaultProps<
  Props extends object,
  Defaults extends DefaultProps<Props> = {}
>(
  WrappedComponent: React.ComponentClass<Props & Defaults>,
  componentName: keyof NonNullable<ThemeType['components']>,
  defaultProps: Defaults
) {
  type Variant = Props & VariantPropsType;
  return class extends React.PureComponent<Variant> {
    static contextType = ThemeContext;
    // using `declare` requires babel plugin which doesn't seem to work
    // class related components & HOC's should be refactored anyway
    // @ts-ignore
    context!: React.ContextType<typeof ThemeContext>;

    render() {
      const theme = this.context.theme;

      if (!componentName) {
        return <WrappedComponent {...this.props} {...defaultProps} />;
      }

      let propsFromTheme = {
        ...(theme.components?.[componentName] ?? {}),
        ...(this.props.variant &&
          //@ts-ignore
          (theme.components?.[componentName]?.variants?.[this.props.variant] ??
            {})),
      };

      delete propsFromTheme.variants;

      const mergedProps = {
        ...defaultProps,
        ...propsFromTheme,
        ...this.props,
      };

      return <WrappedComponent {...mergedProps} />;
    }
  };
}
