import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Div, Icon } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const ButtonComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="button" />

      <ScrollView>
        <ExampleSection name="default">
          <Button>Button</Button>
        </ExampleSection>

        <ExampleSection name="text props">
          <Button fontWeight="bold" fontSize="lg" textTransform="uppercase">
            Button
          </Button>
        </ExampleSection>

        <ExampleSection name="background">
          <Div flexDir="row">
            <Button mr="sm">Default</Button>
            <Button bg="green600" mr="sm" underlayColor="green700">
              Success
            </Button>
            <Button bg="yellow600" mr="sm" underlayColor="yellow700">
              Warning
            </Button>
            <Button bg="red600" mr="sm" underlayColor="red700">
              Danger
            </Button>
            <Button bg="teal600" mr="sm" underlayColor="teal700">
              Info
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="border">
          <Div flexDir="row">
            <Button
              bg="white"
              mr="sm"
              color="blue500"
              underlayColor="blue100"
              borderColor="blue500"
              borderWidth={1}
            >
              Success
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="yellow600"
              underlayColor="yellow100"
              borderColor="yellow600"
              borderWidth={1}
            >
              Warning
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="red500"
              underlayColor="red100"
              borderColor="red500"
              borderWidth={1}
            >
              Danger
            </Button>
            <Button
              bg="white"
              mr="sm"
              color="teal600"
              underlayColor="teal100"
              borderColor="teal600"
              borderWidth={1}
            >
              Info
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="border radius">
          <Div flexDir="row" flexWrap="wrap">
            <Button rounded="sm" mr="sm">
              Small
            </Button>
            <Button rounded="md" mr="sm">
              Medium
            </Button>
            <Button rounded="lg" mr="sm">
              Large
            </Button>
            <Button rounded="xl" mr="sm">
              Extra Large
            </Button>
            <Button rounded="2xl" mr="sm" mt="sm">
              2x Extra Large
            </Button>

            <Button rounded="circle" mr="sm">
              <Icon name="heart" color="white" />
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="icon buttons">
          <Div flexDir="row" flexWrap="wrap" mt="sm">
            <Button bg="white" rounded="circle" mr="sm" p="xl">
              <Icon name="heart" fontSize="4xl" color="red500" />
            </Button>

            <Button bg="yellow500" rounded="circle" mr="sm">
              <Icon name="star" fontSize="4xl" color="white" />
            </Button>

            <Button bg="blue500" rounded="circle" mr="sm">
              <Icon name="like1" fontSize="4xl" color="white" />
            </Button>

            <Button bg="red500" rounded="circle" mr="sm">
              <Icon name="codesquare" fontSize="4xl" color="white" />
            </Button>

            <Button bg="green500" rounded="circle" mr="sm">
              <Icon name="android1" fontSize="4xl" color="white" />
            </Button>

            <Button bg="red100" rounded="circle" mr="sm">
              <Icon name="heart" fontSize="4xl" color="red500" />
            </Button>

            <Button bg="blue100" rounded="circle" mr="sm">
              <Icon name="apple1" fontSize="4xl" color="blue500" />
            </Button>

            <Button bg="green100" rounded="circle" mr="sm">
              <Icon name="appstore1" fontSize="4xl" color="green600" />
            </Button>

            <Button bg="yellow300" rounded="circle" mr="sm">
              <Icon name="slack" fontSize="4xl" color="yellow700" />
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="button with icons">
          <Div flexDir="row">
            <Button
              px="2xl"
              mr="md"
              bg="black"
              suffix={<Icon name="arrowright" ml="md" color="white" />}
            >
              Contact Us
            </Button>
            <Button
              px="2xl"
              rounded="circle"
              prefix={<Icon name="caretright" mr="md" color="white" />}
            >
              Play now
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="full width button">
          <Div mt="sm">
            <Button block>Full width button</Button>
            <Button
              block
              prefix={<Icon mr="md" fontSize="xl" name="user" color="white" />}
              mt="md"
            >
              Button with Left Icon
            </Button>
            <Button
              block
              suffix={<Icon ml="md" fontSize="xl" name="user" color="white" />}
              mt="md"
            >
              Button with Right Icon
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="states">
          <Button mt="sm" block loading>
            Loading
          </Button>
          <Button mt="sm" block disabled loaderColor="white">
            Disabled
          </Button>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default ButtonComponent;
