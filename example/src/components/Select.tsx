import React from "react";
import { ScrollView } from "react-native";
import { Button, Div, Select, Text } from "react-native-magnus";
import { SelectRef } from "src/ui/select/select.type";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

import { countryCodes, CountryCodeType } from "../utils/countryCodes";

const SelectComponent: React.FC = () => {
  const [selectValue1, setSelectedValue1] = React.useState<string | null>(null);
  const selectRef1 = React.useRef<SelectRef>(null);

  const [selectValue2, setSelectedValue2] = React.useState<any[]>([]);
  const selectRef2 = React.useRef<SelectRef>(null);

  const [selectValue3, setSelectedValue3] = React.useState<CountryCodeType>();
  const selectRef3 = React.useRef<SelectRef>(null);

  const [selectValue4, setSelectedValue4] = React.useState<CountryCodeType[]>(
    []
  );
  const selectRef4 = React.useRef<SelectRef>(null);

  return (
    <>
      <ExampleHeader name="select" />

      <ScrollView>
        <ExampleSection name="single choice">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="white"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef1.current?.open()}
          >
            <Text>{selectValue1 ? selectValue1 : "Select"}</Text>
          </Button>

          <Select
            onSelect={(value) => setSelectedValue1(value)}
            ref={selectRef1}
            value={selectValue1}
            title="This is your title"
            mt="md"
            pb="2xl"
            message="This is the long message used to set some context"
            roundedTop="xl"
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={(item, index) => (
              <Select.Option value={item} py="md" px="xl">
                <Text>Option {index + 1}</Text>
              </Select.Option>
            )}
          />
        </ExampleSection>

        <ExampleSection name="multiple choices">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="white"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef2.current?.open()}
          >
            <Text>
              {selectValue2.length ? selectValue2.toString() : "Select"}
            </Text>
          </Button>

          <Select
            onSelect={(value) => setSelectedValue2(value)}
            ref={selectRef2}
            multiple
            value={selectValue2}
            title="This is your title"
            mt="md"
            pb="2xl"
            message="This is the long message used to set some context"
            roundedTop="xl"
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={(item, index) => (
              <Select.Option value={item} py="md" px="xl">
                <Text>Option {index + 1}</Text>
              </Select.Option>
            )}
          />
        </ExampleSection>

        <ExampleSection name="searchable">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="white"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef3.current?.open()}
          >
            <Text>{selectValue3 ? `+${selectValue3.dialCode}` : "Select"}</Text>
          </Button>

          <Select
            ref={selectRef3}
            value={selectValue3}
            data={countryCodes}
            onSelect={(value) => setSelectedValue3(value)}
            searchableProps={["country.name", "dialCode"]}
            renderItem={(item: CountryCodeType, index) => (
              <Select.Option
                key={index}
                value={item}
                py="lg"
                px="xl"
                borderBottomWidth={1}
                borderBottomColor="gray300"
              >
                <Div flexDir="row">
                  <Text fontSize="lg" flex={1}>
                    {item.country.name}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    +{item.dialCode}
                  </Text>
                </Div>
              </Select.Option>
            )}
            title={
              <Text
                px="xl"
                pt="md"
                pb="lg"
                fontSize="lg"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Country phone code
              </Text>
            }
            mt="md"
            pb="2xl"
            roundedTop="xl"
          />
        </ExampleSection>

        <ExampleSection name="searchable + multiple">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="white"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef4.current?.open()}
          >
            <Text>
              {selectValue4.length
                ? selectValue4.map((item) => `+${item.dialCode}`).join(", ")
                : "Select"}
            </Text>
          </Button>

          <Select
            multiple
            ref={selectRef4}
            value={selectValue4}
            data={countryCodes}
            onSelect={(value) => setSelectedValue4(value)}
            searchableProps={["country.name", "dialCode"]}
            renderItem={(item: CountryCodeType, index) => (
              <Select.Option
                key={index}
                value={item}
                py="lg"
                px="xl"
                borderBottomWidth={1}
                borderBottomColor="gray300"
              >
                <Div flexDir="row">
                  <Text fontSize="lg" flex={1}>
                    {item.country.name}
                  </Text>
                  <Text fontSize="lg" fontWeight="bold">
                    +{item.dialCode}
                  </Text>
                </Div>
              </Select.Option>
            )}
            title={
              <Text
                px="xl"
                pt="md"
                pb="lg"
                fontSize="lg"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Country phone code
              </Text>
            }
            mt="md"
            pb="2xl"
            roundedTop="xl"
          />
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default SelectComponent;
