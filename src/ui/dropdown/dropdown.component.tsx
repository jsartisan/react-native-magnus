import * as React from 'react';
import { SafeAreaView, Platform, View } from 'react-native';
import { useContext, useState, useImperativeHandle, useEffect } from 'react';

import { Div } from '../div/div.component';
import { getStyle } from './dropdown.style';
import { Text } from '../text/text.component';
import Modal from 'react-native-modal';
import { Option } from './option.component';
import { ThemeContext, getThemeProperty } from '../../theme';
import { DropdownProps, DropdownRef } from './dropdown.type';

const Dropdown = React.forwardRef<DropdownRef, DropdownProps>((props, ref) => {
  const {
    bg,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    title,
    showSwipeIndicator,
    children,
    backdropColor,
    flexDir,
    flexWrap,
    isVisible,
    onBackdropPress,
    swipeDirection,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const [visible, setVisible] = useState(props.isVisible || false);

  useEffect(() => {
    if ('isVisible' in props) {
      setVisible(props.isVisible || false);
    }
  }, [props]);

  /**
   * exposing functions through ref
   */
  useImperativeHandle(ref, () => ({
    open() {
      setVisible(true);
    },
    close() {
      setVisible(false);
    },
  }));

  /**
   * render title
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === 'string' ? (
        <Text fontSize="md" color="gray700">
          {title}
        </Text>
      ) : (
        title
      );
    }

    return false;
  };

  /**
   * render scroll indicator
   */
  const renderIndicator = () => {
    return (
      showSwipeIndicator && (
        <Div
          h={7}
          rounded="xl"
          w={40}
          bg="gray200"
          style={computedStyle.indicator}
        />
      )
    );
  };

  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={() => setVisible(false)}
      backdropColor={getThemeProperty(theme.colors, backdropColor)}
      onBackdropPress={
        'onBackdropPress' in props ? onBackdropPress : () => setVisible(false)
      }
      style={{
        margin: 0,
        justifyContent: Platform.OS === 'web' ? 'center' : 'flex-end',
      }}
      swipeDirection="down"
      {...rest}
    >
      <View style={computedStyle.wrapper}>
        {renderIndicator()}
        <SafeAreaView>
          <View style={computedStyle.container}>
            {renderTitle()}
            <View style={computedStyle.options}>
              {React.Children.map(children, (child: React.ReactElement) => {
                return React.cloneElement(child, {
                  onSelect: () => {
                    setVisible(false);
                  },
                });
              })}
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
});

Dropdown.defaultProps = {
  bg: 'white',
  rounded: 'none',
  showSwipeIndicator: Platform.OS === 'web' ? false : true,
  backdropColor: 'gray900',
  backdropOpacity: 0.5,
  flexWrap: 'nowrap',
  backdropTransitionOutTiming: 0,
  overflow: 'hidden',
};

export { Dropdown };
