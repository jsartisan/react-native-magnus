import React from 'react';
import { Button, Div, Fab, Icon, Text } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';

const FabComponent = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="fab (floating action button)" />

      <Fab>
        <Button p="none" bg="transparent">
          <Div rounded="sm" bg="card" p="sm">
            <Text fontSize="md">Cheer</Text>
          </Div>
          <Icon
            name="user"
            color="blue600"
            rounded="circle"
            ml="md"
            p="lg"
            bg="card"
            fontSize="3xl"
          />
        </Button>

        <Button p="none" bg="transparent">
          <Div rounded="sm" bg="card" p="sm">
            <Text fontSize="md">Boost</Text>
          </Div>
          <Icon
            name="user"
            color="blue600"
            rounded="circle"
            ml="md"
            p="lg"
            bg="card"
            fontSize="3xl"
          />
        </Button>
      </Fab>
    </ExamplePage>
  );
};

export default FabComponent;
