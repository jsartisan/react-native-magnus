import React from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Div,
  Input,
  Select,
  SelectRef,
  Text,
} from 'react-native-magnus';
import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

import { countryCodes, CountryCodeType } from '../utils/countryCodes';

const SelectComponent = () => {
  const [selectValue1, setSelectedValue1] = React.useState<string | null>(null);
  const selectRef1 = React.useRef<SelectRef>(null);

  const [selectValue2, setSelectedValue2] = React.useState<any[]>([]);
  const selectRef2 = React.useRef<SelectRef>(null);

  const [selectValue3, setSelectedValue3] = React.useState<string | null>(null);
  const selectRef3 = React.useRef<SelectRef>(null);

  const [selectValue4, setSelectedValue4] = React.useState<CountryCodeType>();
  const selectRef4 = React.useRef<SelectRef>(null);

  const [selectValue5, setSelectedValue5] = React.useState<CountryCodeType[]>(
    []
  );
  const selectRef5 = React.useRef<SelectRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="select" />

      <ScrollView>
        <ExampleSection name="single choice">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="card"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef1.current?.open()}
          >
            <Text>{selectValue1 ? selectValue1 : 'Select'}</Text>
          </Button>

          <Select
            onSelect={(value) => setSelectedValue1(value)}
            ref={selectRef1}
            value={selectValue1}
            title="This is your title"
            message="This is the long message used to set some context"
            roundedTop="xl"
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={(item, index) => (
              <Select.Option value={item}>
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
            bg="card"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef2.current?.open()}
          >
            <Text>
              {selectValue2.length ? selectValue2.toString() : 'Select'}
            </Text>
          </Button>

          <Select
            onSelect={(value) => setSelectedValue2(value)}
            ref={selectRef2}
            multiple
            value={selectValue2}
            title="This is your title"
            message="This is the long message used to set some context"
            roundedTop="xl"
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={(item, index) => (
              <Select.Option value={item}>
                <Text>Option {index + 1}</Text>
              </Select.Option>
            )}
          />
        </ExampleSection>

        <ExampleSection name="searchable + custom search input">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="card"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef3.current?.open()}
          >
            <Text>{selectValue3 ? selectValue3 : 'Select'}</Text>
          </Button>

          <Select
            searchableProps="*"
            onSelect={(value) => setSelectedValue3(value)}
            ref={selectRef3}
            value={selectValue3}
            title="This is your title"
            message="This is the long message used to set some context"
            roundedTop="xl"
            data={[
              'Option 1',
              'Option 2',
              'Option 3',
              'Option 4',
              'Option 5',
              'Option 6',
            ]}
            renderSearchInput={({ clearText }) => (
              <Input
                rounded="none"
                placeholder="Search"
                bg="red200"
                color="black"
                mb="lg"
                suffix={
                  <Button mr="-lg" bg="red500" onPress={() => clearText()}>
                    Clear search
                  </Button>
                }
              />
            )}
            renderItem={(item: number) => (
              <Select.Option value={item}>
                <Text>{item}</Text>
              </Select.Option>
            )}
          />
        </ExampleSection>

        <ExampleSection name="searchable (custom object value)">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="card"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef4.current?.open()}
          >
            <Text>{selectValue4 ? `+${selectValue4.dialCode}` : 'Select'}</Text>
          </Button>

          <Select
            ref={selectRef4}
            value={selectValue4}
            data={countryCodes}
            onSelect={(value) => setSelectedValue4(value)}
            searchableProps={['country.name', 'dialCode']}
            roundedTop="xl"
            title="Country phone code"
            renderItem={(item: CountryCodeType, index) => (
              <Select.Option
                key={index}
                value={item}
                py="lg"
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
          />
        </ExampleSection>

        <ExampleSection name="searchable + multiple (custom object value)">
          <Button
            flex={1}
            block
            borderWidth={1}
            bg="card"
            color="gray900"
            borderColor="gray300"
            onPress={() => selectRef5.current?.open()}
          >
            <Text>
              {selectValue5.length
                ? selectValue5.map((item) => `+${item.dialCode}`).join(', ')
                : 'Select'}
            </Text>
          </Button>

          <Select
            multiple
            ref={selectRef5}
            value={selectValue5}
            data={countryCodes}
            onSelect={(value) => setSelectedValue5(value)}
            searchableProps={['country.name', 'dialCode']}
            roundedTop="xl"
            title="Country phone code"
            renderItem={(item: CountryCodeType, index) => (
              <Select.Option
                key={index}
                value={item}
                py="lg"
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
          />
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default SelectComponent;
