import React from 'react';
import { Button, Drawer, Text, DrawerRef } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const DrawerComponent = () => {
  const drawerRef = React.useRef<DrawerRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="drawer" />

      <ExampleSection name="default">
        <Drawer ref={drawerRef}>
          <Text p="xl">Hello! I'm a drawer.</Text>
        </Drawer>

        <Button block onPress={() => drawerRef.current?.open()}>
          Open Drawer
        </Button>
      </ExampleSection>
    </ExamplePage>
  );
};

export default DrawerComponent;
