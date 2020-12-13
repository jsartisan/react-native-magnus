import React from "react";
import { Button, Div, Fab, Icon, Text } from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
import ExampleHeader from "../utils/ExampleHeader";

const FabComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="fab (floating action button)" />

      <Fab bg="blue600" h={50} w={50}>
        <Button p="none" bg="transparent" justifyContent="flex-end">
          <Div rounded="sm" bg="white" p="sm">
            <Text fontSize="md">Cheer</Text>
          </Div>
          <Icon
            name="user"
            color="blue600"
            h={50}
            w={50}
            rounded="circle"
            ml="md"
            bg="white"
          />
        </Button>
        <Button p="none" bg="transparent" justifyContent="flex-end">
          <Div rounded="sm" bg="white" p="sm">
            <Text fontSize="md">Boost</Text>
          </Div>
          <Icon
            name="user"
            color="blue600"
            h={50}
            w={50}
            rounded="circle"
            ml="md"
            bg="white"
          />
        </Button>
      </Fab>
    </ExamplePage>
  );
};

export default FabComponent;
