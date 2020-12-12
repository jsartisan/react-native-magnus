import React from "react";
import { ScrollView } from "react-native";
import { Button, Icon, Snackbar, SnackbarRefType } from "react-native-magnus";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const SnackbarComponent: React.FC = () => {
  const snackbarRef1 = React.useRef<SnackbarRefType>(null);
  const snackbarRef2 = React.useRef<SnackbarRefType>(null);

  return (
    <>
      <ExampleHeader name="snackbar" />

      <ScrollView>
        <ExampleSection name="light">
          <Button
            block
            p="lg"
            onPress={() => {
              snackbarRef2.current?.hide();
              snackbarRef1.current?.show();
            }}
          >
            Open Snackbar
          </Button>
        </ExampleSection>

        <ExampleSection name="dark">
          <Button
            block
            p="lg"
            onPress={() => {
              snackbarRef1.current?.hide();
              snackbarRef2.current?.show();
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
        onDismiss={() => {}}
        ref={snackbarRef1}
        bg="green200"
        color="green800"
        fontSize="lg"
        duration={2000}
      >
        Here is a light snack for you!
      </Snackbar>

      <Snackbar
        suffix={
          <Icon
            name="checkcircle"
            color="white"
            fontSize="lg"
            fontFamily="AntDesign"
          />
        }
        px="xl"
        py="lg"
        onDismiss={() => {}}
        ref={snackbarRef2}
        bg="green700"
        color="white"
        fontSize="lg"
        duration={2000}
      >
        Here is a dark snack for you!
      </Snackbar>
    </>
  );
};

export default SnackbarComponent;
