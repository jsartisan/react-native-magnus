import * as React from 'react';
import Modal from 'react-native-modal';
import { SafeAreaView, Platform, View } from 'react-native';
import { useState, useImperativeHandle, useEffect } from 'react';

import { Div } from '../div/div.component';
import { getStyle } from './dropdown.style';
import { Text } from '../text/text.component';
import { DropdownOption } from './dropdown.option.component';
import { useTheme } from '../../theme';
import {
  DropdownProps,
  DropdownRef,
  CompoundedDropdown,
} from './dropdown.type';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getThemeColor } from '../../theme/theme.service';

const Dropdown = React.forwardRef<DropdownRef, DropdownProps>(
  (incomingProps, ref) => {
    const props = useDefaultProps('Dropdown', incomingProps, {
      bg: 'white',
      rounded: 'none',
      showSwipeIndicator: Platform.OS === 'web' ? false : true,
      backdropColor: 'gray900',
      backdropOpacity: 0.5,
      flexWrap: 'nowrap',
      backdropTransitionOutTiming: 0,
      overflow: 'hidden',
      py: 'xl',
    });

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
      style,
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
      onSwipeComplete,
      ...rest
    } = props;
    const { theme } = useTheme();
    const computedStyle = getStyle(theme, props as DropdownProps);
    const [visible, setVisible] = useState(props.isVisible ?? false);

    useEffect(() => {
      if ('isVisible' in props) {
        setVisible(props.isVisible ?? false);
      }
    }, [props, visible]);

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
        onSwipeComplete={(params) => {
          setVisible(false);
          onSwipeComplete && onSwipeComplete(params);
        }}
        backdropColor={getThemeColor(theme.colors, backdropColor)}
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
  }
) as CompoundedDropdown;

Dropdown.Option = DropdownOption;

// Dropdown.defaultProps = {
//   bg: 'white',
//   rounded: 'none',
//   showSwipeIndicator: Platform.OS === 'web' ? false : true,
//   backdropColor: 'gray900',
//   backdropOpacity: 0.5,
//   flexWrap: 'nowrap',
//   backdropTransitionOutTiming: 0,
//   overflow: 'hidden',
// };

export { Dropdown };
