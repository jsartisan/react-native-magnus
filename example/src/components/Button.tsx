import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Div, Icon } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const ButtonComponent = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="button" />

      <ScrollView>
        <ExampleSection name="default">
          <Button>Button</Button>
        </ExampleSection>

        <ExampleSection name="text props">
          <Div flexDir="row">
            <Button
              fontWeight="bold"
              mr="sm"
              fontSize="lg"
              textTransform="uppercase"
            >
              Button
            </Button>

            <Button
              fontSize="lg"
              textTransform="uppercase"
              fontFamily="Inconsolata-Regular"
            >
              Button
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="background">
          <Div flexDir="row">
            <Button mr="sm">Default</Button>
            <Button mr="sm" variant="success">
              Success
            </Button>
            <Button mr="sm" variant="warning">
              Warning
            </Button>
            <Button mr="sm" variant="danger">
              Danger
            </Button>
            <Button mr="sm" variant="info">
              Info
            </Button>
          </Div>
        </ExampleSection>

        <ExampleSection name="border">
          <Div flexDir="row">
            <Button variant="success-border" mr="sm">
              Success
            </Button>
            <Button variant="warning-border" mr="sm">
              Warning
            </Button>
            <Button variant="danger-border" mr="sm">
              Danger
            </Button>
            <Button variant="info-border" mr="sm">
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

            <Button rounded="circle" mr="sm" mt="sm">
              <Icon name="heart" color="white" fontSize="3xl" />
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
