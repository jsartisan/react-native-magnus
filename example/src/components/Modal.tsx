import React from "react";
import { ScrollView } from "react-native";
import { Button, Div, Icon, Modal, Text } from "react-native-magnus";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const ModalComponent: React.FC = () => {
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [modalVisible3, setModalVisible3] = React.useState(false);

  return (
    <>
      <ExampleHeader name="modal" />

      <ScrollView>
        <ExampleSection name="default">
          <Button block p={10} onPress={() => setModalVisible1(true)}>
            Open Modal
          </Button>

          <Modal isVisible={modalVisible1}>
            <Button
              bg="gray400"
              h={35}
              w={35}
              position="absolute"
              top={20}
              right={15}
              zIndex={2}
              rounded="circle"
              onPress={() => {
                setModalVisible1(false);
              }}
            >
              <Icon color="gray900" name="close" />
            </Button>

            <Div flex={1} justifyContent="center" alignItems="center">
              <Text>Hello! I'm a modal.</Text>
            </Div>
          </Modal>
        </ExampleSection>

        <ExampleSection name="custom height">
          <Button block p={10} onPress={() => setModalVisible2(true)}>
            Open Modal
          </Button>

          <Modal isVisible={modalVisible2} h="50%">
            <Button
              bg="gray400"
              h={35}
              w={35}
              position="absolute"
              top={20}
              right={15}
              zIndex={2}
              rounded="circle"
              onPress={() => {
                setModalVisible2(false);
              }}
            >
              <Icon color="gray900" name="close" />
            </Button>

            <Div flex={1} justifyContent="center" alignItems="center">
              <Text>Hello! I'm a modal.</Text>
            </Div>
          </Modal>
        </ExampleSection>

        <ExampleSection name="custom height + background color">
          <Button block p={10} onPress={() => setModalVisible3(true)}>
            Open Modal
          </Button>

          <Modal isVisible={modalVisible3} h="30%" bg="black">
            <Button
              bg="gray400"
              h={35}
              w={35}
              position="absolute"
              top={20}
              right={15}
              zIndex={2}
              rounded="circle"
              onPress={() => {
                setModalVisible3(false);
              }}
            >
              <Icon color="gray900" name="close" />
            </Button>

            <Div flex={1} justifyContent="center" alignItems="center">
              <Text color="white">Hello! I'm a modal.</Text>
            </Div>
          </Modal>
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default ModalComponent;
