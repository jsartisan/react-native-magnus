import * as React from 'react';
import { ThemeProvider, Div } from 'react-native-magnus';

export default function App() {
  return (
    <ThemeProvider>
      <Div h={20} w={20} bg="red500"></Div>
    </ThemeProvider>
  );
}
