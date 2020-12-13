import React from "react";
import { Button, Drawer, Text } from "react-native-magnus";
import { DrawerRef } from "lib/typescript/src/ui/drawer/drawer.type";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const DrawerComponent: React.FC = () => {
  const drawerRef = React.useRef<DrawerRef>(null);

  return (
    <>
      <ExampleHeader name="drawer" />

      <ExampleSection name="default">
        <Drawer ref={drawerRef}>
          <Text p="xl">Hello! I'm a drawer.</Text>
        </Drawer>

        <Button onPress={() => drawerRef.current?.open()}>Open Drawer</Button>
      </ExampleSection>
    </>
  );
};

export default DrawerComponent;
