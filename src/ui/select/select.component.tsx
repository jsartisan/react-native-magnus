import * as React from 'react';
import { useContext, useState, useImperativeHandle } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import RNModal from 'react-native-modal';

import { getStyle } from './select.style';
import { Div } from '../div/div.component';
import { Text } from '../text/text.component';
import { Button } from '../button/button.component';
import { ThemeContext } from '../../theme';
import { Option } from './option.component';
import { SelectProps } from './select.type';

type Ref = {};

const Select = React.forwardRef<Ref, SelectProps>((props, ref) => {
  const {
    value,
    title,
    multiple,
    footer,
    onSelect: onSelectProp,
    data,
    renderItem,
  } = props;
  const { theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const computedStyle = getStyle(theme, props);

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    close() {
      setIsVisible(false);
    },
    open() {
      setIsVisible(true);
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
      setIsVisible(false);
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
        <Text fontSize="text400" color="gray700" px="xl" pt="md" pb="lg">
          {title}
        </Text>
      ) : (
        title
      );
    }

    return false;
  };

  const renderFooter = () => {
    if (!multiple) {
      return;
    }
    if (footer) {
      return footer;
    }

    return (
      <Button
        block
        bg="green600"
        mx="xl"
        mt="lg"
        onPress={() => {
          setIsVisible(false);
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
      isVisible={isVisible}
      backdropColor="black"
      onBackdropPress={() => setIsVisible(false)}
      hideModalContentWhileAnimating
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
    >
      <Div style={computedStyle.wrapper}>
        <SafeAreaView style={computedStyle.container}>
          {renderTitle()}
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) =>
              React.cloneElement(renderItem(item, index), {
                onSelect,
                selectedValue,
              })
            }
          />
          {renderFooter()}
        </SafeAreaView>
      </Div>
    </RNModal>
  );
});

Select.defaultProps = {
  bg: 'white',
  rounded: 'none',
  flexDir: 'column',
};

export { Option, Select };
