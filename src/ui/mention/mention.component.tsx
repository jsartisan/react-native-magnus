import React from 'react';

import { View, FlatList, ActivityIndicator } from 'react-native';

import { MentionProps } from './mention.type';
import { getStyle } from './mention.style';
import { ThemeContext } from '../../theme';
import { withDefaultProps } from '../../utilities/withDefaultProps';
import { DefaultProps } from '../../types';

class MentionBase extends React.Component<
  MentionProps & DefaultProps<MentionProps>
> {
  previousChar = ' ';

  isTrackingStarted = false;

  state = {
    textInputHeight: '',
    isTrackingStarted: false,
  };

  startTracking = () => {
    this.isTrackingStarted = true;
    this.setState({
      isTrackingStarted: true,
    });
  };

  stopTracking = () => {
    const { onHide } = this.props;

    this.isTrackingStarted = false;
    this.setState({
      isTrackingStarted: false,
    });

    if (onHide) {
      onHide();
    }
  };

  updateSuggestions = (lastKeyword: string) => {
    const { triggerCallback } = this.props;

    triggerCallback(lastKeyword);
  };

  identifyKeyword = (val: string) => {
    const { trigger, triggerLocation } = this.props;

    if (this.isTrackingStarted) {
      const boundary = triggerLocation === 'new-word-only' ? 'B' : '';
      const pattern = new RegExp(
        `\\${boundary}${trigger}[a-z0-9_-]+|\\${boundary}${trigger}`,
        'gi'
      );
      const keywordArray = val.match(pattern);
      if (keywordArray && !!keywordArray.length) {
        const lastKeyword = keywordArray[keywordArray.length - 1];

        this.updateSuggestions(lastKeyword);
      }
    }
  };

  /**
   * on change text
   */
  onChangeText = (val: string) => {
    const { isTrackingStarted } = this.state;
    const { children, triggerLocation, trigger } = this.props;

    if (children.props.onChangeText) {
      children.props.onChangeText(val);
    }

    const lastChar = val.substr(val.length - 1);
    const wordBoundry =
      triggerLocation === 'new-word-only'
        ? this.previousChar.trim().length === 0
        : true;
    if (lastChar === trigger && wordBoundry) {
      this.startTracking();
    } else if ((lastChar === ' ' && isTrackingStarted) || val === '') {
      this.stopTracking();
    }
    this.previousChar = lastChar;
    this.identifyKeyword(val);
  };

  resetTextbox = () => {
    this.previousChar = ' ';
    this.stopTracking();
  };

  render() {
    const { isTrackingStarted } = this.state;

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
    } = this.props;

    return (
      <ThemeContext.Consumer>
        {({ theme }) => {
          const computedStyle = getStyle(theme, this.props);

          return (
            <View style={{ flex: 1 }}>
              <>
                {(data ?? []).length > 0 &&
                  isTrackingStarted &&
                  loading === false && (
                    <FlatList
                      data={data}
                      showsVerticalScrollIndicator
                      style={computedStyle.list}
                      {...rest}
                      renderItem={(rowData) => renderItem(rowData)}
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
                  onChangeText: this.onChangeText,
                })}
              </View>
            </View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

const Mention = withDefaultProps<MentionProps>(MentionBase, 'Mention', {
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
  bottom: 0,
  onHide: () => {},
});

export { Mention };
