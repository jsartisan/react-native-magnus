import * as React from 'react';
import { useContext, useState, useImperativeHandle } from 'react';
import { SafeAreaView } from 'react-native';
import RNModal from 'react-native-modal';

import { Div } from '../div/div.component';
import { Text } from '../text/text.component';
import { ThemeContext, getThemeProperty } from '../../theme';
import { getStyle } from './dropdown.style';
import { DropdownProps, DropdownRef } from './dropdown.type';

const Dropdown = React.forwardRef<DropdownRef, DropdownProps>((props, ref) => {
  const {
    bg,
    m,
    mt,
    mr,
    mb,
    ml,
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
    title,
    showSwipeIndicator,
    children,
    backdropColor,
    backdropOpacity,
    flexDir,
    flexWrap,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const [isVisible, setIsVisible] = useState(false);

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    open() {
      setIsVisible(true);
    },
    close() {
      setIsVisible(false);
    },
  }));

  /**
   * render title
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === 'string' ? (
        <Text fontSize="text400" color="gray700">
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
    <RNModal
      backdropTransitionOutTiming={0}
      isVisible={isVisible}
      onSwipeComplete={() => setIsVisible(false)}
      swipeDirection={['down']}
      backdropOpacity={backdropOpacity}
      backdropColor={getThemeProperty(
        theme.colors,
        backdropColor,
        'transparent'
      )}
      onBackdropPress={() => setIsVisible(false)}
      style={{
        margin: 0,
        justifyContent: 'flex-end',
      }}
      {...rest}
    >
      <Div style={computedStyle.wrapper}>
        {renderIndicator()}
        <SafeAreaView>
          <Div style={computedStyle.container}>
            {renderTitle()}
            <Div style={computedStyle.options}>
              {React.Children.map(children, (child: React.ReactElement) => {
                return React.cloneElement(child, {
                  onSelect: () => {
                    setIsVisible(false);
                  },
                });
              })}
            </Div>
          </Div>
        </SafeAreaView>
      </Div>
    </RNModal>
  );
});

Dropdown.defaultProps = {
  bg: 'white',
  rounded: 'none',
  showSwipeIndicator: true,
  backdropColor: 'gray900',
  backdropOpacity: 0.5,
  flexWrap: 'nowrap',
};

export { Dropdown };
