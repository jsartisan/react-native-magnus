import React, { ReactElement, ReactNode } from 'react';

import { Context } from './host.component';
import { Consumer } from './consumer.component';

interface IPortalProps {
  children: ReactNode;
}

export const Portal = ({ children }: IPortalProps): ReactElement => (
  <Context.Consumer>
    {(manager): ReactElement => (
      <Consumer manager={manager}>{children}</Consumer>
    )}
  </Context.Consumer>
);
