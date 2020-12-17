import React from "react";
import { ScrollView } from "react-native";
import { Button, Header, Icon, Text } from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const HeaderComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="header" />

      <ScrollView>
        <ExampleSection name="default" withoutSpacingOnContent>
          <Header>My Title</Header>
        </ExampleSection>

        <ExampleSection name="center aligned" withoutSpacingOnContent>
          <Header shadow="sm" alignment="center">
            My Title
          </Header>
        </ExampleSection>

        <ExampleSection name="center aligned + prefix" withoutSpacingOnContent>
          <Header
            p="lg"
            borderBottomWidth={1}
            borderBottomColor="gray200"
            alignment="center"
            prefix={
              <Button bg="white">
                <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
              </Button>
            }
          >
            My Title
          </Header>
        </ExampleSection>

        <ExampleSection name="prefix + suffix" withoutSpacingOnContent>
          <Header
            alignment="left"
            prefix={
              <Button bg="white" mr="lg">
                <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
              </Button>
            }
            suffix={
              <Button bg="white">
                <Icon name="more-vertical" fontFamily="Feather" />
              </Button>
            }
          >
            My Title
          </Header>
        </ExampleSection>

        <ExampleSection name="background color" withoutSpacingOnContent>
          <Header
            bg="red"
            color="white"
            prefix={
              <Button bg="red" mr="lg">
                <Icon
                  color="white"
                  name="arrow-left"
                  fontFamily="Feather"
                  fontSize="2xl"
                />
              </Button>
            }
            suffix={
              <Button bg="red">
                <Icon color="white" name="more-vertical" fontFamily="Feather" />
              </Button>
            }
          >
            My Title
          </Header>
        </ExampleSection>

        <ExampleSection name="background image" withoutSpacingOnContent>
          <Header
            bg="red"
            color="white"
            bgImg={{
              uri:
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Monochrome-Type-Simple-Background-Image.jpg",
            }}
            prefix={
              <Button bg="transparent" mr="lg">
                <Icon
                  color="white"
                  name="arrow-left"
                  fontFamily="Feather"
                  fontSize="2xl"
                />
              </Button>
            }
            suffix={
              <Button bg="transparent">
                <Icon color="white" name="more-vertical" fontFamily="Feather" />
              </Button>
            }
          >
            My Title
          </Header>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default HeaderComponent;
