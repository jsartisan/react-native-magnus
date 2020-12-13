import React from "react";
import { ScrollView } from "react-native";
import { Div, Input, Icon, Text, Select, Button } from "react-native-magnus";
import { SelectRef } from "src/ui/select/select.type";
import ExampleHeader from "../utils/ExampleHeader";
import ExampleSection from "../utils/ExampleSection";

interface CountryCodeType {
  country: {
    name: string;
    isoCode?: string;
  };
  code: number;
}
const countryCodes: CountryCodeType[] = [
  { country: { name: "Brazil" }, code: 55 },
  { country: { name: "Spain" }, code: 34 },
  { country: { name: "Italy" }, code: 39 },
  { country: { name: "Portugal" }, code: 351 },
];

const InputComponent: React.FC = () => {
  const selectCountryCodeRef = React.useRef<SelectRef>(null);
  const [
    selectedCountryCode,
    setSelectedCountryCode,
  ] = React.useState<CountryCodeType>();
  const onSelectCountryCodeOption = (value: CountryCodeType) =>
    setSelectedCountryCode(value);

  return (
    <>
      <ExampleHeader name="input" />

      <ScrollView>
        <ExampleSection name="default">
          <Input placeholder="Email" mt="md" />
        </ExampleSection>

        <ExampleSection name="simple">
          <Input
            prefix={
              <Icon mr="lg" name="search1" color="gray700" fontSize="3xl" />
            }
            px="xl"
            py="lg"
            fontSize="lg"
            borderWidth={0}
            placeholder="Search your doge homies"
            mt="md"
            bg="white"
          />
        </ExampleSection>

        <ExampleSection name="background color">
          <Input
            placeholder="Email"
            mt="md"
            bg="blue100"
            color="gray800"
            borderWidth={0}
          />
        </ExampleSection>

        <ExampleSection name="states">
          <Input
            placeholder="Email"
            mt="md"
            loading
            bg="gray100"
            borderWidth={0}
          />
        </ExampleSection>

        <ExampleSection name="suffix/prefix">
          <Input
            placeholder="Email"
            mt="md"
            shadow={1}
            suffix={<Icon name="user" color="gray800" />}
          />
          <Input
            placeholder="Email"
            mt="md"
            prefix={<Icon name="user" color="gray800" />}
          />
        </ExampleSection>

        <ExampleSection name="input with select">
          <Select
            ref={selectCountryCodeRef}
            value={selectedCountryCode}
            data={countryCodes}
            onSelect={onSelectCountryCodeOption}
            searchableProps={["country.name", "code"]}
            renderItem={(item: CountryCodeType, index: number) => (
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
                    +{item.code}
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

          <Input
            prefix={
              <Div mr="md" borderRightWidth={1} borderRightColor="gray400">
                <Button
                  mr="md"
                  bg="transparent"
                  onPress={() => selectCountryCodeRef.current?.open()}
                >
                  <Text fontWeight="bold" textTransform="uppercase">
                    {selectedCountryCode
                      ? `+${selectedCountryCode.code}`
                      : "Choose"}
                  </Text>
                </Button>
              </Div>
            }
            px="xl"
            py="lg"
            fontSize="lg"
            borderWidth={0}
            placeholder="Phone number"
            mt="md"
            bg="white"
          />
        </ExampleSection>
      </ScrollView>
    </>
  );
};

export default InputComponent;
