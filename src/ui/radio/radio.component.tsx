import * as React from 'react';
import { useContext, useState } from 'react';
import {
  View as RNView,
  ActivityIndicator,
  TouchableWithoutFeedback as RNButton,
} from 'react-native';
import { getStyle } from './radio.style';
import { RadioProps } from './radio.type';
import { ThemeContext } from '../../theme';
import { Icon } from '../icon/icon.component';
import { getIconName, getIconColor } from './radio.service';
import { getThemeProperty } from '../../theme/theme.service';

const Radio: React.FunctionComponent<RadioProps> = (props) => {
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
    size,
    value,
    style,
    loading,
    disabled,
    onChange,
    children,
    activeColor,
    currentValue,
    inactiveColor,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const [focussed, setFocussed] = useState(false);
  const computedStyle = getStyle(theme, props);

  /**
   * on press checkbox
   */
  const onPress = () => {
    const { disabled, onChange, value } = props;
    if (disabled) {
      return;
    }

    onChange(value);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setFocussed(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setFocussed(false);
  };

  /**
   * get icon
   * shows activity indication if loading state is true
   */
  const getIcon = () => {
    return loading ? (
      <ActivityIndicator
        size={getThemeProperty(theme.fontSize, size, 16)}
        color={iconColor}
      />
    ) : (
      <Icon
        name={iconName}
        color={iconColor}
        fontFamily="MaterialIcons"
        fontSize={size}
        w={getThemeProperty(theme.fontSize, size, 16)}
        h={getThemeProperty(theme.fontSize, size, 16)}
        style={{ zIndex: 2, position: 'relative' }}
      />
    );
  };

  const checked = currentValue === value;
  const iconName = getIconName(checked);
  const iconColor = getIconColor(
    checked,
    disabled,
    activeColor,
    inactiveColor,
    theme
  );
  const icon = getIcon();

  return (
    <RNButton
      {...rest}
      style={computedStyle.button}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <RNView style={computedStyle.container}>
        <RNView>
          {focussed && <RNView style={computedStyle.highlightContainer} />}
          {icon}
        </RNView>
        {children}
      </RNView>
    </RNButton>
  );
};

Radio.defaultProps = {
  loading: false,
  disabled: false,
  size: 'text600',
  value: null,
  activeColor: 'blue600',
  inactiveColor: 'gray900',
};

export { Radio };
