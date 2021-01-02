import * as React from 'react';

import { Icon } from '../icon/icon.component';
import { Button } from '../button/button.component';
import { CollapseHeaderProps } from './collapse.type';
import { Div } from '../div/div.component';

const CollapseHeader: React.FunctionComponent<CollapseHeaderProps> = (
  props
) => {
  const { suffix, activeSuffix, prefix, activePrefix, active } = props;
  return (
    <Button
      {...props}
      prefix={active ? (activePrefix ? activePrefix : prefix) : prefix}
      suffix={active ? (activeSuffix ? activeSuffix : suffix) : suffix}
    />
  );
};

CollapseHeader.defaultProps = {
  block: true,
  roundedBottom: 'none',
  bg: 'blue600',
  color: 'white',
  py: 'xl',
  px: 'none',
  justifyContent: 'flex-start',
  prefix: <Div px="lg" />,
  suffix: (
    <Icon
      px="xl"
      name="chevron-down"
      fontFamily="Feather"
      position="absolute"
      right={0}
      color="white"
    />
  ),
  activeSuffix: (
    <Icon
      px="xl"
      name="chevron-up"
      fontFamily="Feather"
      position="absolute"
      right={0}
      color="white"
    />
  ),
};

export { CollapseHeader };
