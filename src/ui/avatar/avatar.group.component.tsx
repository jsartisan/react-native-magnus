import React, { FC, Children, cloneElement, ReactElement } from 'react';

import { Div } from '../div/div.component';
import { AvatarGroupProps } from './avatar.group.type';
import { getThemeProperty, useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

export const AvatarGroup: FC<AvatarGroupProps> = (incomingProps) => {
  const props = useDefaultProps('AvatarGroup', incomingProps, {
    row: true,
    ml: 'none',
    offset: 'lg',
  });

  const { children, ml, offset, ...rest } = props;
  const { theme } = useTheme();
  const calculatedOffset = getThemeProperty(theme.spacing, offset);
  const calculatedMarginLeft = getThemeProperty(theme.spacing, ml);

  return (
    <Div {...rest} ml={calculatedOffset + calculatedMarginLeft}>
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          ml: -1 * calculatedOffset,
        });
      })}
    </Div>
  );
};
