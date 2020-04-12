import * as React from "react";
import { useContext } from "react";
import { ImageBackground as RNImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

import { DivProps } from "./animated.type";
import { ThemeContext } from "../../theme";
import { getStyle } from "./animated.style";
import { registerAnimations } from "./animated.service";

registerAnimations();

const Animated: React.FunctionComponent<DivProps> = (props: DivProps) => {
  const {
    h,
    w,
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
    minH,
    minW,
    position,
    style,
    flexDir,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    bgImg,
    duration,
    bgMode,
    animation,
    alignItems,
    justifyContent,
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
    flexWrap,
    shadow,
    shadowColor,
    ...rest
  } = props;

  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.div}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
        {...rest}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <Animatable.View
      animation={`magnus-${animation}`}
      duration={duration}
      easing="ease-in-out"
      iterationCount={1}
      style={{ ...computedStyle.div }}
      {...rest}
    >
      {children}
    </Animatable.View>
  );
};

Animated.defaultProps = {
  bg: "transparent",
  flexWrap: "nowrap",
  rounded: "none",
  shadow: "none",
  shadowColor: "gray900",
  position: "relative",
  bgMode: "cover",
  animation: "fromTop",
  duration: 150,
  delay: 0
};

export { Animated };
