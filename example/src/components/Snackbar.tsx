import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const SnackbarComponent = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="snackbar" />

      <ScrollView>
        <ExampleSection name="">
          <Button
            block
            p="lg"
            onPress={() => {
              global.toast?.show('Hello World', {
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
    </ExamplePage>
  );
};

export default SnackbarComponent;
