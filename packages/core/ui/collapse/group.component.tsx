import * as React from 'react';
import { useState } from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';

import { Div } from '../div/div.component';
import { CollapseGroupProps } from './collapse.type';

const CollapseGroup: React.FunctionComponent<CollapseGroupProps> = (
  incomingProps
) => {
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
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        onChange,
        active: activeId === child.props.id,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};

export { CollapseGroup };
