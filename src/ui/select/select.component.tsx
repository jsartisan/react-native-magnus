import * as React from 'react';
import { useContext, useState, useImperativeHandle } from 'react';
import {
  View as RNView,
  TouchableHighlightProps as RNButtonProps,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';

import { getStyle } from './select.style';
import { Div } from '../div/div.component';
import { Text } from '../text/text.component';
import { Button } from '../button/button.component';
import { ThemeContext } from '../../theme';
import { Option } from './option.component';
import { getThemeProperty } from '../../theme/theme.service';

interface SelectProps extends RNButtonProps {
  h?: number;
  w?: number | string;
  m?: any;
  p?: any;
  color?: string;
  bg?: string;
  borderColor?: any;
  borderWidth?: any;
  rounded?: any;
  style?: any;
  value?: any;
  children: React.ReactElement[] | React.ReactElement;
  placeholder?: string;
  minW?: number | string;
  minH?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  onSelect: (value: any) => void;
}

type Ref = {};

const Select = React.forwardRef<Ref, SelectProps>((props, ref) => {
  const {
    m,
    p,
    w,
    h,
    bg,
    borderColor,
    borderWidth,
    rounded,
    suffix,
    color,
    prefix,
    placeholder,
    value,
    onSelect: onSelectProp,
    children,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const [isFocussed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const computedStyle = getStyle(theme, {}, { isFocussed });
  const underlayColor = getThemeProperty(
    theme.colors,
    props.underlayColor,
    props.underlayColor,
  );

  /**
   * on press select
   *
   * @param e
   */
  const onPress = () => {
    setIsVisible(true);
  };

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    close() {
      setIsVisible(false);
    },
  }));

  /**
   * @param value
   */
  const onSelect = (value: any) => {
    onSelectProp(value);
    setSelectedValue(value);
    setIsVisible(false);
  };

  return (
    <Button {...rest} onPress={onPress} underlayColor={underlayColor}>
      <>
        <RNView style={computedStyle.container}>
          {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
          {selectedValue && (
            <Text fontSize="text400" color={color} style={{ flex: 1 }}>
              {selectedValue}
            </Text>
          )}
          {!selectedValue && (
            <Text fontSize="text400" color="gray300" style={{ flex: 1 }}>
              {placeholder}
            </Text>
          )}
          {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
        </RNView>
        <Modal
          backdropTransitionOutTiming={0}
          isVisible={isVisible}
          onSwipeComplete={() => setIsVisible(false)}
          swipeDirection={['down']}
          backdropColor="black"
          onBackdropPress={() => setIsVisible(false)}
          style={{
            margin: 0,
            justifyContent: 'flex-end',
          }}>
          <Div style={{ backgroundColor: 'white' }}>
            <SafeAreaView pointerEvents="box-none">
              <Text
                textAlign="center"
                p="md"
                fontSize="text300"
                color="gray500">
                {placeholder}
              </Text>
              {React.Children.map(children, (child: React.ReactElement) => {
                return React.cloneElement(child, {
                  onSelect,
                });
              })}
            </SafeAreaView>
          </Div>
        </Modal>
      </>
    </Button>
  );
});

Select.defaultProps = {
  minH: 40,
  p: { x: 12 },
  borderColor: 'gray300',
  borderWidth: 1,
  rounded: 'md',
  color: 'gray800',
  underlayColor: 'gray100',
};

export { Option, Select };
