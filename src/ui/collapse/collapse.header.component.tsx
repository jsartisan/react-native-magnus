import * as React from 'react';

import { Icon } from '../icon/icon.component';
import { Button } from '../button/button.component';
import { CollapseHeaderProps } from './collapse.type';

const CollapseHeader: React.FunctionComponent<CollapseHeaderProps> = (
  props: CollapseHeaderProps
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
  suffix: (
    <Icon
      px="xl"
      name="chevron-down"
      fontFamily="Feather"
      position="absolute"
      right={0}
    />
  ),
  activeSuffix: (
    <Icon
      px="xl"
      name="chevron-up"
      fontFamily="Feather"
      position="absolute"
      right={0}
    />
  ),
};

export { CollapseHeader };
