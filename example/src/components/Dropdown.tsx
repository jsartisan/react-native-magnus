import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Div,
  Dropdown,
  DropdownRef,
  Icon,
  Text,
} from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const DropdownComponent: FC = () => {
  const dropdownRef1 = useRef<DropdownRef>(null);
  const dropdownRef2 = useRef<DropdownRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="dropdown" />

      <ScrollView>
        <ExampleSection name="example #1">
          <Button block mt="sm" onPress={() => dropdownRef1.current?.open()}>
            Open Dropdown
          </Button>

          <Dropdown
            ref={dropdownRef1}
            m="md"
            pb="md"
            bg="transparent"
            showSwipeIndicator={false}
            roundedTop="xl"
          >
            <Dropdown.Option
              value={1}
              underlayColor="blue200"
              color="blue600"
              fontSize="xl"
              py="lg"
              px="xl"
              borderBottomWidth={1}
              borderBottomColor="textLight"
              justifyContent="center"
              roundedTop="lg"
            >
              First Option
            </Dropdown.Option>
            <Dropdown.Option
              value={2}
              underlayColor="blue200"
              borderBottomWidth={1}
              borderBottomColor="textLight"
              fontSize="xl"
              color="blue600"
              py="lg"
              px="xl"
              justifyContent="center"
              roundedBottom="lg"
            >
              Second Option
            </Dropdown.Option>
            <Dropdown.Option
              value={3}
              color="red500"
              underlayColor="red200"
              py="lg"
              mt="xl"
              px="xl"
              fontSize="xl"
              fontWeight="bold"
              justifyContent="center"
              rounded="lg"
            >
              Cancel
            </Dropdown.Option>
          </Dropdown>
        </ExampleSection>

        <ExampleSection name="example #2">
          <Button block mt="sm" onPress={() => dropdownRef2.current?.open()}>
            Open Dropdown
          </Button>

          <Dropdown
            ref={dropdownRef2}
            showSwipeIndicator={false}
            roundedTop="xl"
            bg="card"
            title={
              <Div row mx="xl" mb="md" alignItems="center" p="md" pb="lg">
                <Button
                  py="md"
                  bg="card"
                  color="gray500"
                  position="absolute"
                  fontSize="lg"
                  zIndex={1}
                  onPress={() => dropdownRef2.current?.close()}
                >
                  Cancel
                </Button>
                <Text
                  color="textDark"
                  textAlign="center"
                  flex={1}
                  fontSize="lg"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Add Item
                </Text>
              </Div>
            }
          >
            <Dropdown.Option
              value={1}
              prefix={
                <Icon name="picture" mr="lg" color="red500" fontSize="3xl" />
              }
            >
              Photos
            </Dropdown.Option>
            <Dropdown.Option
              value={2}
              prefix={
                <Icon name="camerao" mr="lg" color="blue500" fontSize="3xl" />
              }
            >
              Camera
            </Dropdown.Option>
            <Dropdown.Option
              value={3}
              prefix={
                <Icon
                  name="filetext1"
                  mr="lg"
                  color="green700"
                  fontSize="3xl"
                />
              }
            >
              Notes
            </Dropdown.Option>
            <Dropdown.Option
              value={4}
              alignItems="center"
              block
              prefix={
                <Icon name="file1" mr="lg" color="pink500" fontSize="3xl" />
              }
            >
              Documents
            </Dropdown.Option>
          </Dropdown>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default DropdownComponent;
