import React from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
} from 'react-native';
import { useTheme } from '../../theme';

import { getThemeColor } from '../../theme/theme.service';
import { VariantPropsType } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';

interface StatusBarComponent<T> extends React.FC<T> {
  currentHeight?: number;
}

const StatusBar: StatusBarComponent<RNStatusBarProps & VariantPropsType> = (
  incomingProps
) => {
  const props = useDefaultProps('Statusbar', incomingProps, {
    animated: true,
  });

  const { backgroundColor } = props;
  const { theme } = useTheme();

  return (
    <RNStatusBar
      {...props}
      backgroundColor={
        typeof backgroundColor === 'string'
          ? getThemeColor(theme.colors, backgroundColor)
          : backgroundColor
      }
    />
  );
};

StatusBar.currentHeight = RNStatusBar.currentHeight;

// StatusBar.defaultProps = {
//   animated: true,
// };

export { StatusBar };
