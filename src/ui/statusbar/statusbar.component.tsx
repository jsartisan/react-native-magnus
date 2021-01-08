import React, { useContext } from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps as RNStatusBarProps,
} from 'react-native';
import { ThemeContext } from '../../theme';

import { getThemeProperty } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';

interface StatusBarComponent<T> extends React.FC<T> {
  currentHeight?: number;
}

const StatusBar: StatusBarComponent<RNStatusBarProps> = (incomingProps) => {
  const props = useDefaultProps('Statusbar', incomingProps, {
    animated: true,
  });

  const { backgroundColor } = props;
  const { theme } = useContext(ThemeContext);
  const themedBackgroundColor = getThemeProperty(theme.colors, backgroundColor);

  return (
    <RNStatusBar
      {...props}
      backgroundColor={
        typeof backgroundColor === 'string'
          ? themedBackgroundColor
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
