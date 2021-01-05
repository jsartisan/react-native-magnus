import { ThemeType, useTheme } from '../theme';

export const useDefaultProps = <T>(
  componentName: keyof NonNullable<ThemeType['components']>,
  props: T,
  defaultProps: Partial<T> = {}
): T => {
  const theme = useTheme();

  return {
    ...defaultProps,
    ...((theme.components && theme.components[componentName]) ?? {}),
    ...props,
  };
};
