import React, { FC, useRef } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { Button, Div, Overlay, Text, OverlayRef } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const OverlayComponent: FC = () => {
  const overlayRef = useRef<OverlayRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="overlay" />

      <ScrollView>
        <ExampleSection name="default">
          <Button
            block
            onPress={() => {
              overlayRef.current?.open();

              setTimeout(() => {
                overlayRef.current?.close();
              }, 3000);
            }}
          >
            Show Overlay
          </Button>

          <Overlay
            ref={overlayRef}
            p="xl"
            onBackdropPress={() => overlayRef.current?.close()}
          >
            <Div flexDir="row" justifyContent="center" alignItems="center">
              <ActivityIndicator size={30} color="red" />
              <Text fontSize="lg" ml="lg">
                Loading...
              </Text>
            </Div>
          </Overlay>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default OverlayComponent;
