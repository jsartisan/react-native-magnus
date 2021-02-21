import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Snackbar, SnackbarRef } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const SnackbarComponent: React.FC = () => {
  const snackbarRef = React.useRef<SnackbarRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="snackbar" />

      <ScrollView>
        <ExampleSection name="">
          <Button
            block
            p="lg"
            onPress={() => {
              snackbarRef.current.show('Hello World', {
                duration: 5000,
                suffix: (
                  <Button bg="green500" fontSize="sm" p="sm" px="md">
                    Yay!
                  </Button>
                ),
              });
            }}
          >
            Open Snackbar
          </Button>
        </ExampleSection>
      </ScrollView>

      <Snackbar
        px="xl"
        py="lg"
        ref={snackbarRef}
        color="white"
        fontSize="lg"
        duration={2000}
      />
    </ExamplePage>
  );
};

export default SnackbarComponent;
