import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Icon, Snackbar, SnackbarRef } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const SnackbarComponent: React.FC = () => {
  const snackbarRef1 = React.useRef<SnackbarRef>(null);
  const snackbarRef2 = React.useRef<SnackbarRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="snackbar" />

      <ScrollView>
        <ExampleSection name="dark">
          <Button
            block
            p="lg"
            onPress={() => {
              toast.show('Hi');
            }}
          >
            Open Snackbar
          </Button>
        </ExampleSection>
      </ScrollView>

      <Snackbar
        suffix={
          <Icon
            name="checkcircle"
            color="green800"
            fontSize="lg"
            fontFamily="AntDesign"
          />
        }
        px="xl"
        py="lg"
        ref={(ref) => (global.toast = ref)}
        bg="green200"
        color="green800"
        fontSize="lg"
        duration={2000}
      />
    </ExamplePage>
  );
};

export default SnackbarComponent;
