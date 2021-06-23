import { ViewStyle } from 'react-native';

export const mutableStyles = {
  container: (totalPages: number): ViewStyle => ({
    width: `${100 * totalPages}%`,
    flex: 1,
  }),
};
