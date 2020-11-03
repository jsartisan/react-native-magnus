import { DivProps } from '../div/div.type';
import { ButtonProps } from '../button/button.type';

export interface CollapseProps extends DivProps {
  defaultActive?: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

export interface CollapseBodyProps extends DivProps {}

export interface CollapseHeaderProps extends ButtonProps {
  active: boolean;
  activeSuffix?: React.ReactNode;
  activePrefix?: React.ReactNode;
}
