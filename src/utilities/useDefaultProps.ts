import { useContext } from 'react';
import { ThemeContext, ThemeType } from '../theme';

export const useDefaultProps = <T>(
  componentName: keyof NonNullable<ThemeType['components']>,
  props: T,
  defaultProps: Partial<T> = {}
): T => {
  const { theme } = useContext(ThemeContext);

  // const latestProps = useRef<T>({ ...defaultProps, ...props });
  // useEffect(() => {
  //   const appliedStyles = mergeRecursively(
  //     theme.components[componentName],
  //     defaultProps
  //   );

  //   latestProps.current = mergeRecursively(appliedStyles, props) as T;
  // });

  // return latestProps.current;

  return {
    ...defaultProps,
    ...((theme.components && theme.components[componentName]) ?? {}),
    ...props,
  };
};
