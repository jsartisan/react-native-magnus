import React, { Children, cloneElement, FC, useState } from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';

import { Div } from '../div/div.component';
import { CollapseGroupProps } from './collapse.type';

export const CollapseGroup: FC<CollapseGroupProps> = (incomingProps) => {
  const props = useDefaultProps('CollapseGroup', incomingProps, {});

  const [activeId, setActiveId] = useState(props.defaultActive ?? null);
  const { children, onChange: onChangeProp, ...rest } = props;

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const onChange = (optionId: any) => {
    setActiveId(optionId === activeId ? null : optionId);

    if (onChangeProp) {
      onChangeProp(optionId);
    }
  };

  /**
   * clones the children and add checked, onChange prop
   */
  const renderChildren = () => {
    return Children.map(children, (child: React.ReactElement) => {
      return cloneElement(child, {
        onChange,
        active: activeId === child.props.id,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};
