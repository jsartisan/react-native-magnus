import * as React from 'react';

import { useContext } from 'react';
import { Div } from '../div/div.component';
import { AvatarGroupProps } from './avatar.group.type';
import { ThemeContext, getThemeProperty } from '../../theme';

const AvatarGroup: React.FunctionComponent<AvatarGroupProps> = (props) => {
  const { children, ml, offset, ...rest } = props;
  const { theme } = useContext(ThemeContext);
  const calculatedOffset = getThemeProperty(theme.spacing, offset);
  const calculatedMarginLeft = getThemeProperty(theme.spacing, ml);

  return (
    <Div {...rest} ml={calculatedOffset + calculatedMarginLeft}>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          ml: -1 * calculatedOffset,
        });
      })}
    </Div>
  );
};

AvatarGroup.defaultProps = {
  row: true,
  ml: 'none',
  offset: 'lg',
};

export { AvatarGroup };
