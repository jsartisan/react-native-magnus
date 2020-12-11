import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView, FlatList } from 'react-native';
import { useContext, useState, useImperativeHandle, useEffect } from 'react';

import { getStyle } from './select.style';
import { Div } from '../div/div.component';
import { ThemeContext } from '../../theme';
import { Text } from '../text/text.component';
import { Input } from '../input/input.component';
import { Icon } from '../icon/icon.component';
import { Option } from './select.option.component';
import { Button } from '../button/button.component';
import { SelectProps, SelectRef, CompoundedSelect } from './select.type';

const Select = React.forwardRef<SelectRef, SelectProps>((props, ref) => {
  const {
    value,
    title,
    footer,
    data,
    multiple,
    renderItem,
    keyExtractor,
    searchableProps,
    onSelect: onSelectProp,
  } = props;
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(props.isVisible || false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const computedStyle = getStyle(theme, props);

  const resolveMultiLevelAccess = (obj: any, keys: string) => {
    return keys.split('.').reduce((cur: any, key: string) => {
      return cur[key];
    }, obj);
  };

  const filterData = (data: any[], searchTerm: string) => {
    if (!searchableProps || !searchableProps.length) return data;

    var lowSearch = searchTerm.toLowerCase();
    return data.filter((item) => {
      return searchableProps.some((key) =>
        String(resolveMultiLevelAccess(item, key))
          .toLowerCase()
          .includes(lowSearch)
      );
    });
  };

  const filteredData = React.useMemo(() => filterData(data, searchTerm), [
    data,
    searchTerm,
  ]);

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible || visible);
    }

    if (!visible) setSearchTerm('');
  }, [props, visible]);

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    close() {
      setVisible(false);
    },
    open() {
      setVisible(true);
    },
  }));

  /**
   * set values of select based if its multiple select
   * or single valued select
   *
   * @param value
   */
  const onSelect = (value: any) => {
    let finalValue;

    if (multiple) {
      const copy = selectedValue.slice();
      const index = selectedValue.indexOf(value);
      if (index !== -1) {
        copy.splice(index, 1);
      } else {
        copy.push(value);
      }

      setSelectedValue(copy);
      finalValue = copy;
    } else {
      setSelectedValue(value);
      setVisible(false);
      finalValue = value;
    }

    onSelectProp(finalValue);
  };

  /**
   * render title at top select modal
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === 'string' ? (
        <Text fontSize="md" color="gray700" px="xl" pt="md" pb="lg">
          {title}
        </Text>
      ) : (
        title
      );
    }

    return false;
  };

  /**
   * render searchbar at top select modal
   */
  const renderSearchbar = () => {
    if (searchableProps?.length) {
      return (
        <Input
          prefix={<Icon mr="lg" name="search" color="gray700" fontSize="3xl" />}
          suffix={
            <Button
              h={30}
              w={30}
              rounded="circle"
              bg="gray700"
              onPress={() => setSearchTerm('')}
            >
              <Icon name="clear" color="white" fontSize="xl" />
            </Button>
          }
          px="xl"
          py="md"
          mx="xl"
          mt="md"
          mb="xl"
          pr="lg"
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          fontSize="md"
          borderWidth={0}
          placeholder="Search items"
          bg="gray200"
        />
      );
    }

    return false;
  };

  const renderFooter = () => {
    if (footer) return footer;

    // if the component is single-valued and no footer is provided
    // don't render anything in footer
    if (!multiple) return false;

    return (
      <Button
        block
        bg="green600"
        mx="xl"
        mt="lg"
        onPress={() => {
          setVisible(false);
        }}
      >
        Submit
      </Button>
    );
  };

  return (
    <RNModal
      backdropTransitionOutTiming={0}
      animationIn="slideInUp"
      isVisible={visible}
      backdropColor="black"
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      hideModalContentWhileAnimating
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
    >
      <Div style={computedStyle.wrapper}>
        <SafeAreaView style={computedStyle.container}>
          <Div>
            {renderTitle()}
            {renderSearchbar()}
          </Div>

          {filteredData.length ? (
            <FlatList
              data={filteredData}
              keyExtractor={keyExtractor}
              renderItem={({ item, index }) =>
                React.cloneElement(renderItem(item, index), {
                  onSelect,
                  selectedValue,
                })
              }
            />
          ) : (
            <Div flex={1} pl="xl">
              <Text fontSize="lg">No results found.</Text>
            </Div>
          )}

          {renderFooter()}
        </SafeAreaView>
      </Div>
    </RNModal>
  );
}) as CompoundedSelect;

Select.defaultProps = {
  bg: 'white',
  rounded: 'none',
  flexDir: 'column',
  isVisible: false,
  // @ts-ignore
  keyExtractor: (item, index) => `${index}`,
};

Select.Option = Option;

export { Select };
