import React from "react";
import { ScrollView } from "react-native";
import { Checkbox, Div, Text } from "react-native-magnus";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

const CheckboxComponent: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = React.useState<any[]>();

  return (
    <>
      <ExampleHeader name="checkbox" />

      <ScrollView>
        <ExampleSection name="default">
          <Checkbox defaultChecked>
            <Text ml="sm">Normal Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="colored">
          <Checkbox activeColor="green500" inactiveColor="green900">
            <Text ml="sm">Green Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="states">
          <Checkbox disabled>
            <Text ml="sm">Disabled Checkbox</Text>
          </Checkbox>
          <Checkbox loading>
            <Text ml="sm">Loading state Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="custom renderer">
          <Div mt="sm">
            <Checkbox.Group row onChange={(value) => setCheckboxValue(value)}>
              {["Option 1", "Option 2", "Option 3"].map((item) => (
                <Checkbox value={item} key={item}>
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
                </Checkbox>
              ))}
            </Checkbox.Group>

            <Text mt="xl">Checked: {checkboxValue?.join(", ")}</Text>
          </Div>
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default CheckboxComponent;
