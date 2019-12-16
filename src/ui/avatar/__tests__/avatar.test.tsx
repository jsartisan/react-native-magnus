import React from 'react';
import renderer from 'react-test-renderer';

import { Avatar } from '../avatar.component';
import { ThemeProvider } from '../../../theme';

describe('Avatar Component', () => {
  it('should render without issues', () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Avatar>1</Avatar>
      </ThemeProvider>,
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Avatar);
    expect(typeInstance.props.children).toBe('1');
  });
});
