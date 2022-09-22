import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '../../theme';
import { Div } from './div.component';
import { DivProps } from './div.type';
import { Text } from '../text/text.component';

describe('Div component', () => {
  const TestDiv: React.FC<DivProps> = (props) => (
    <ThemeProvider>
      <Div {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    render(
      <TestDiv>
        <Text>I love magnus ui</Text>
      </TestDiv>
    );

    expect(screen.getByText('I love magnus ui')).toBeTruthy();
  });
});
