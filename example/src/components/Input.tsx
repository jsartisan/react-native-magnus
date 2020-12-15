import React from "react";
import { ScrollView } from "react-native";
import {
  Div,
  Input,
  Icon,
  Text,
  Select,
  Button,
  SelectRef,
} from "react-native-magnus";

import ExamplePage from "../utils/ExamplePage";
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
  const [selectedCountryCode, setSelectedCountryCode] = React.useState<
    CountryCodeType
  >();
  const onSelectCountryCodeOption = (value: CountryCodeType) =>
    setSelectedCountryCode(value);

  return (
    <ExamplePage>
      <ExampleHeader name="input" />

      <ScrollView>
        <ExampleSection name="default">
          <Input placeholder="Email" mt="md" />
        </ExampleSection>

        <ExampleSection name="center aligned">
          <Input placeholder="Email" mt="md" textAlign="center" />
        </ExampleSection>

        <ExampleSection name="center aligned + prefix + suffix">
          <Input
            placeholder="Email"
            mt="md"
            textAlign="center"
            prefix={<Icon name="user" color="gray700" fontSize="3xl" />}
            suffix={<Icon name="check" color="gray700" fontSize="3xl" />}
          />
        </ExampleSection>

        <ExampleSection name="background color">
          <Input
            placeholder="Email"
            mt="md"
            bg="black"
            color="white"
            borderWidth={0}
          />
        </ExampleSection>

        <ExampleSection name="states">
          <Input placeholder="Email" mt="md" loading />
        </ExampleSection>

        <ExampleSection name="suffix/prefix">
          <Input
            placeholder="Email"
            mt="md"
            shadow={1}
            suffix={<Icon name="user" color="gray700" fontSize="3xl" />}
          />
          <Input
            placeholder="Email"
            mt="md"
            prefix={
              <Icon mr="lg" name="search1" color="gray700" fontSize="3xl" />
            }
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
            placeholder="Phone number"
            mt="md"
          />
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default InputComponent;
