import React from "react";
import { ScrollView } from "react-native";
import { Div, Image, Text } from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const DivComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="div" />

      <ScrollView>
        <ExampleSection name="background color">
          <Div flexDir="row">
            {/* <Div h={40} w={40} mr="sm" bg="brand500" /> */}
            <Div h={40} w={40} mr="sm" bg="green500" />
            <Div h={40} w={40} mr="sm" bg="teal500" />
            <Div h={40} w={40} mr="sm" bg="yellow500" />
            <Div h={40} w={40} mr="sm" bg="red500" />
            <Div h={40} w={40} mr="sm" bg="blue500" />
            <Div h={40} w={40} mr="sm" bg="gray500" />
          </Div>
        </ExampleSection>

        <ExampleSection name="shadows">
          <Div flexDir="row">
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="none"
              justifyContent="center"
              alignItems="center"
            >
              <Text>none</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="xs"
              justifyContent="center"
              alignItems="center"
            >
              <Text>xs</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="sm"
              justifyContent="center"
              alignItems="center"
            >
              <Text>sm</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="md"
              justifyContent="center"
              alignItems="center"
            >
              <Text>md</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="lg"
              justifyContent="center"
              alignItems="center"
            >
              <Text>lg</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="xl"
              justifyContent="center"
              alignItems="center"
            >
              <Text>xl</Text>
            </Div>
            <Div
              h={40}
              w={40}
              bg="white"
              mr="md"
              rounded="sm"
              shadow="2xl"
              justifyContent="center"
              alignItems="center"
            >
              <Text>2xl</Text>
            </Div>
          </Div>
        </ExampleSection>

        <ExampleSection name="border">
          <Div flexDir="row">
            <Div h={40} w={40} mr="sm" borderColor="green500" borderWidth={1} />
            <Div
              h={40}
              w={40}
              mr="sm"
              borderColor="yellow500"
              borderWidth={1}
            />
            <Div h={40} w={40} mr="sm" borderColor="red500" borderWidth={1} />
            <Div h={40} w={40} mr="sm" borderColor="blue500" borderWidth={1} />
            <Div h={40} w={40} mr="sm" borderColor="gray500" borderWidth={1} />
          </Div>
        </ExampleSection>

        <ExampleSection name="radius">
          <Div flexDir="row">
            <Div h={40} w={40} mr="sm" rounded="none" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="xs" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="sm" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="md" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="lg" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="xl" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="2xl" bg="blue400" />
            <Div h={40} w={40} mr="sm" rounded="circle" bg="blue400" />
          </Div>
        </ExampleSection>

        <ExampleSection name="flex">
          <Div flexDir="row">
            <Div h={40} w={40} bg="red400" flex={1} />
            <Div h={40} w={40} bg="yellow400" flex={2} />
            <Div h={40} w={40} bg="green400" flex={2} />
          </Div>
        </ExampleSection>

        <ExampleSection name="background image">
          <Div
            mt="sm"
            rounded="md"
            h={150}
            bgImg={{
              uri:
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Monochrome-Type-Simple-Background-Image.jpg",
            }}
          />
        </ExampleSection>

        <ExampleSection name="image">
          <Image
            mt="sm"
            rounded="md"
            h={150}
            source={{
              uri:
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg",
            }}
          />
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default DivComponent;
