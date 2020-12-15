import React from "react";
import { ScrollView } from "react-native";
import { Div, Radio, Text } from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const RadioComponent: React.FC = () => {
  const [radioValue1, setRadioValue1] = React.useState();
  const [radioValue2, setRadioValue2] = React.useState();

  return (
    <ExamplePage>
      <ExampleHeader name="radio" />

      <ScrollView>
        <ExampleSection name="default">
          <Div mt="sm">
            <Radio.Group
              defaultValue={radioValue1}
              onChange={(value: any) => setRadioValue1(value)}
            >
              <Radio value={1}>
                <Text ml="sm">Pikachu</Text>
              </Radio>
              <Radio value={2}>
                <Text ml="sm">Squirtle</Text>
              </Radio>
              <Radio value={3}>
                <Text ml="sm">Charmander</Text>
              </Radio>
              <Radio value={4}>
                <Text ml="sm">Balbasaur</Text>
              </Radio>

              <Radio value={5} loading>
                <Text ml="sm">More pokemons coming</Text>
              </Radio>
            </Radio.Group>

            <Text mt="xl">Checked: {radioValue1}</Text>
          </Div>
        </ExampleSection>

        <ExampleSection name="custom renderer">
          <Div mt="sm">
            <Radio.Group row onChange={(value) => setRadioValue2(value)}>
              {["Option 1", "Option 2", "Option 3"].map((item) => (
                <Radio value={item} key={item}>
                  {({ checked }) => (
                    <Div
                      bg={checked ? "blue600" : "white"}
                      px="xl"
                      py="md"
                      mr="md"
                      rounded="circle"
                    >
                      <Text color={checked ? "white" : "gray800"}>{item}</Text>
                    </Div>
                  )}
                </Radio>
              ))}
            </Radio.Group>

            <Text mt="xl">Checked: {radioValue2}</Text>
          </Div>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default RadioComponent;
