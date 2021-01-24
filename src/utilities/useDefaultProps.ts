import { ThemeType, useTheme } from '../theme';
import { DefaultProps } from '../types';

export const useDefaultProps = <Props extends object>(
  componentName: keyof NonNullable<ThemeType['components']> | null,
  props: Props,
  defaultProps: DefaultProps<Props>
) => {
  const theme = useTheme();

  let propsFromTheme: Partial<Props> = {};

  if (componentName !== null) {
    // @ts-ignore
    propsFromTheme =
      (theme.components && theme.components[componentName]) ?? {};
  }

  const mergedProps = {
    ...defaultProps,
    ...propsFromTheme,
    ...props,
  };

  return mergedProps as Props & Required<typeof defaultProps>;
};
