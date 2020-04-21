import * as React from "react";
import { useContext } from "react";
import { Text as RNText, View as RNView, Image as RNImage } from "react-native";

import { getStyle } from "./avatar.style";
import { ThemeContext } from "../../theme";
import { AvatarProps } from "./avatar.type";

const Avatar: React.FunctionComponent<AvatarProps> = props => {
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
    position,
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    borderColor,
    color,
    fontSize,
    size,
    alignSelf,
    bottom,
    left,
    right,
    top,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    shadow,
    shadowColor,
    opacity,
    zIndex,
    source,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  /**
   * render the content based on the props passed
   */
  const renderContent = () => {
    if (source) {
      return <RNImage source={source} style={computedStyle.image} />;
    }

    if (typeof children === "string") {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  return (
    <RNView style={computedStyle.container} {...rest}>
      {renderContent()}
    </RNView>
  );
};

Avatar.defaultProps = {
  bg: "transparent",
  size: 48,
  color: "black500",
  rounded: "circle",
  fontSize: "text400",
  shadow: 0,
  shadowColor: "black500",
  position: "relative",
  zIndex: 1
};

export { Avatar };
