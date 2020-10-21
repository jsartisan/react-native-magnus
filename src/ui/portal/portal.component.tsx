import * as React from 'react';

import { Context } from './host.component';
import { Consumer } from './consumer.component';

interface IPortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps): JSX.Element => (
  <Context.Consumer>
    {(manager): JSX.Element => (
      <Consumer manager={manager}>{children}</Consumer>
    )}
  </Context.Consumer>
);
