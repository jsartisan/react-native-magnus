import React from "react";
import { ScrollView } from "react-native";
import { Collapse, Icon, Text } from "react-native-magnus";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const CollapseComponent: React.FC = () => {
  return (
    <>
      <ExampleHeader name="collapse" />

      <ScrollView>
        <ExampleSection name="default">
          <Collapse>
            <Collapse.Header
              active
              color="gray900"
              fontSize="md"
              p="xl"
              px="none"
              prefix={<Icon name="wallet" mr="md" color="gray400" />}
            >
              Header 1
            </Collapse.Header>
            <Collapse.Body pb="xl">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
                laudantium, odio nulla recusandae labore pariatur in, vitae
                corporis delectus repellendus.
              </Text>
            </Collapse.Body>
          </Collapse>

          <Collapse>
            <Collapse.Header
              active
              color="gray900"
              fontSize="md"
              p="xl"
              px="none"
              prefix={<Icon name="wallet" mr="md" color="gray400" />}
            >
              Header 2
            </Collapse.Header>
            <Collapse.Body pb="xl">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
                laudantium, odio nulla recusandae labore pariatur in, vitae
                corporis delectus repellendus.
              </Text>
            </Collapse.Body>
          </Collapse>
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default CollapseComponent;
