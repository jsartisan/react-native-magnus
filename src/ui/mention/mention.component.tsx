import * as React from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import { MentionProps } from './mention.type';
import { getStyle } from './mention.style';
import { ThemeContext } from '../../theme';

const defaultProps = {
  bg: 'white',
  rounded: 'md',
  borderColor: 'gray200',
  borderWidth: 1,
  horizontal: false,
  loading: false,
  shadow: 1,
  shadowColor: 'gray900',
  keyboardShouldPersistTaps: 'always',
  trigger: '@',
  position: 'absolute',
  bottom: '100%',
  onHide: () => {},
};

const Mention = (props: MentionProps) => {
  const [previousChar, setPreviousChar] = React.useState(' ');
  const [isTrackingStarted, setIsTrackingStarted] = React.useState(false);

  const startTracking = () => {
    setIsTrackingStarted(true);
  };

  const stopTracking = () => {
    const { onHide } = props;

    setIsTrackingStarted(false);

    onHide?.();
  };

  const updateSuggestions = (lastKeyword: string) => {
    const { triggerCallback } = props;

    triggerCallback(lastKeyword);
  };

  const identifyKeyword = (val: string) => {
    const { trigger, triggerLocation } = props;

    if (!isTrackingStarted) return;

    const boundary = triggerLocation === 'new-word-only' ? 'B' : '';
    const pattern = new RegExp(
      `\\${boundary}${trigger}[a-z0-9_-]+|\\${boundary}${trigger}`,
      'gi'
    );
    const keywordArray = val.match(pattern);
    if (keywordArray && !!keywordArray.length) {
      const lastKeyword = keywordArray[keywordArray.length - 1];

      updateSuggestions(lastKeyword);
    }
  };

  /**
   * on change text
   */
  const onChangeText = (val: string) => {
    const { children, triggerLocation, trigger } = props;

    children.props.onChangeText?.(val);

    const lastChar = val.substr(val.length - 1);
    const wordBoundry =
      triggerLocation === 'new-word-only'
        ? previousChar.trim().length === 0
        : true;
    if (lastChar === trigger && wordBoundry) {
      startTracking();
    } else if ((lastChar === ' ' && isTrackingStarted) || val === '') {
      stopTracking();
    }
    setPreviousChar(lastChar);
    identifyKeyword(val);
  };

  const resetTextbox = () => {
    setPreviousChar(' ');
    stopTracking();
  };

  const {
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
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    renderItem,
    loading,
    data,
    ...rest
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const computedStyle = getStyle(theme, props);

        return (
          <View style={{ flex: 1 }}>
            <>
              {(data || []).length > 0 &&
                isTrackingStarted &&
                loading === false && (
                  <FlatList
                    data={data}
                    showsVerticalScrollIndicator
                    style={computedStyle.list}
                    {...rest}
                    renderItem={renderItem}
                  />
                )}
              {loading && (
                <View style={computedStyle.loading}>
                  <ActivityIndicator />
                </View>
              )}
            </>

            <View>
              {React.cloneElement(children, {
                onChangeText: onChangeText,
              })}
            </View>
          </View>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Mention.defaultProps = defaultProps;

export { Mention };
