import { DivProps } from '../div/div.type';
import { ButtonProps } from '../button/button.type';
import { CollapseBody } from './collapse.body.component';
import { CollapseHeader } from './collapse.header.component';
import { CollapseGroup } from './group.component';

export type CompoundedCollapse<P> = React.FunctionComponent<P> & {
  Header: typeof CollapseHeader;
  Body: typeof CollapseBody;
  Group: typeof CollapseGroup;
};

export interface CollapseProps extends DivProps {
  id?: string | number;
  active?: boolean;
  defaultActive?: boolean;
  onChange?: (value: any) => void;
  children: React.ReactNode[] | React.ReactNode;
}

export interface CollapseBodyProps extends DivProps {
  expanded?: boolean;
}

export interface CollapseHeaderProps extends ButtonProps {
  active?: boolean;
  activeSuffix?: React.ReactNode;
  activePrefix?: React.ReactNode;
}
