import React from 'react';
import deepmerge from 'deepmerge';
import { ThemeType, useTheme } from '../theme';

export const useDefaultProps = <T, DT = Partial<T>>(
  componentName: keyof NonNullable<ThemeType['components']>,
  props: T,
  defaultProps: DT
) => {
  const theme = useTheme();

  const finalProps = React.useMemo(() => {
    // @ts-ignore
    const propsFromTheme: Partial<T> =
      (theme.components && theme.components[componentName]) ?? {};

    // @ts-ignore
    const mergedProps: T & Required<typeof defaultProps> = deepmerge(
      deepmerge(defaultProps, propsFromTheme),
      props
    );

    return mergedProps;
  }, [componentName, defaultProps, props, theme.components]);

  return finalProps;
};
