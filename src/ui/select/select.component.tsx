import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView, FlatList } from 'react-native';
import { useContext, useState, useImperativeHandle, useEffect } from 'react';

import { getStyle } from './select.style';
import { Div } from '../div/div.component';
import { ThemeContext } from '../../theme';
import { Text } from '../text/text.component';
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
    onSelect: onSelectProp,
  } = props;
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(props.isVisible || false);
  const [selectedValue, setSelectedValue] = useState(value);
  const computedStyle = getStyle(theme, props);

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible || false);
    }
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
            keyExtractor={keyExtractor}
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
