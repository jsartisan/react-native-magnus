import { DivProps } from '../div/div.type';
import { ButtonProps } from '../button/button.type';
import { CollapseBody } from './collapse.body.component';
import { CollapseHeader } from './collapse.header.component';

export type CompoundedCollapse<P> = React.FunctionComponent<P> & {
  Header: typeof CollapseHeader;
  Body: typeof CollapseBody;
};

export interface CollapseProps extends DivProps {
  defaultActive?: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

export interface CollapseBodyProps extends DivProps {}

export interface CollapseHeaderProps extends ButtonProps {
  active?: boolean;
  activeSuffix?: React.ReactNode;
  activePrefix?: React.ReactNode;
}
