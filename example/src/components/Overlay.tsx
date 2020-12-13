import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Button, Div, Overlay, Text } from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const OverlayComponent: React.FC = () => {
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  return (
    <ExamplePage>
      <ExampleHeader name="overlay" />

      <ScrollView>
        <ExampleSection name="default">
          <Button
            block
            onPress={() => {
              setOverlayVisible(true);

              setTimeout(() => {
                setOverlayVisible(false);
              }, 3000);
            }}
          >
            Show Overlay
          </Button>

          <Overlay visible={overlayVisible} p="xl">
            <Div flexDir="row" justifyContent="center" alignItems="center">
              <ActivityIndicator size={30} color="black" />
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
