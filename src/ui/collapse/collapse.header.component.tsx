import * as React from 'react';
import { View } from 'react-native';

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
  bg: 'transparent',
  justifyContent: 'flex-start',
  suffix: (
    <Icon
      name="chevron-down"
      fontFamily="Feather"
      position="absolute"
      right={0}
    />
  ),
  activeSuffix: (
    <Icon
      name="chevron-up"
      fontFamily="Feather"
      position="absolute"
      right={0}
    />
  ),
};

export { CollapseHeader };
