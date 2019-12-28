import * as React from "react";
import { useContext } from "react";
import {
  ImageBackground as RNImageBackground,
  View as RNView
} from "react-native";

import * as Animatable from "react-native-animatable";

import { DivProps } from "./animateddiv.type";
import { getStyle } from "./animateddiv.style";
import { registerAnimations } from "./animateddiv.service";
import { ThemeContext } from "../../theme";

registerAnimations();

const AnimatedDiv: React.FunctionComponent<DivProps> = (props: DivProps) => {
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
    <RNView style={{ ...computedStyle.div }} {...rest}>
      <Animatable.View
        animation={`magnus-${animation}`}
        duration={duration}
        easing="ease-in-out"
        iterationCount={1}
      >
        {children}
      </Animatable.View>
    </RNView>
  );
};

AnimatedDiv.defaultProps = {
  bg: "transparent",
  flexWrap: "nowrap",
  rounded: "none",
  shadow: 0,
  shadowColor: "gray900",
  position: "relative",
  bgMode: "cover",
  animation: "fromTop",
  duration: 150
};

export { AnimatedDiv };
