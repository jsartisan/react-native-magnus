import React from 'react';
import { ScrollView } from 'react-native';
import { Checkbox, Div, Text } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const CheckboxComponent = () => {
  const [checkboxGroupValue, setCheckboxGroupValue] = React.useState<any[]>();
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>();

  const handleChecked = (value: boolean) => setCheckboxValue(value);

  return (
    <ExamplePage>
      <ExampleHeader name="checkbox" />

      <ScrollView>
        <ExampleSection name="default">
          <Checkbox checked={checkboxValue} onChecked={handleChecked}>
            <Text ml="sm">Normal Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="colored">
          <Checkbox
            activeColor="green500"
            inactiveColor="green900"
            checked={checkboxValue}
            onChecked={handleChecked}
          >
            <Text ml="sm">Green Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="states">
          <Checkbox disabled checked={checkboxValue} onChecked={handleChecked}>
            <Text ml="sm">Disabled Checkbox</Text>
          </Checkbox>
          <Checkbox loading checked={checkboxValue} onChecked={handleChecked}>
            <Text ml="sm">Loading state Checkbox</Text>
          </Checkbox>
        </ExampleSection>

        <ExampleSection name="custom renderer">
          <Div mt="sm">
            <Checkbox.Group
              row
              onChange={(value) => setCheckboxGroupValue(value)}
            >
              {['Option 1', 'Option 2', 'Option 3'].map((item) => (
                <Checkbox value={item} key={item}>
                  {({ checked }) => (
                    <Div
                      bg={checked ? 'blue600' : 'card'}
                      px="xl"
                      py="md"
                      mr="md"
                      rounded="circle"
                    >
                      <Text color={checked ? 'white' : 'textDark'}>{item}</Text>
                    </Div>
                  )}
                </Checkbox>
              ))}
            </Checkbox.Group>

            <Text mt="xl">Checked: {checkboxGroupValue?.join(', ')}</Text>
          </Div>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default CheckboxComponent;
