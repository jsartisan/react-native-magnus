import * as React from "react";
import { useContext, useEffect } from "react";
import { Animated as RNAnimated } from "react-native";

import { getStyle } from "./skeleton.style";
import { ThemeContext } from "../../theme";
import { Div } from "../div/div.component";
import { SkeletonProps } from "./skeleton.type";

const Skeleton: React.FunctionComponent<SkeletonProps> = props => {
  const { bg, avatar, count } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);
  const animatedOpacity = new RNAnimated.Value(0);

  /**
   * runs animations
   */
  const runAnimation = () => {
    animatedOpacity.setValue(0);

    RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(animatedOpacity, {
          toValue: 1,
          duration: 550
        }),
        RNAnimated.timing(animatedOpacity, {
          toValue: 0,
          duration: 550
        })
      ])
    ).start(() => runAnimation());
  };

  /**
   * side-effects
   */
  useEffect(() => {
    runAnimation();

    return function cleanup() {};
  });

  return (
    <RNAnimated.View
      style={{
        ...computedStyle.container,
        ...{
          opacity: animatedOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.3]
          })
        }
      }}
    >
      {avatar && <Div bg={bg} h={40} w={40} mr="sm" rounded="circle" />}
      <Div style={{ flex: 1, width: "100%" }}>
        {[...Array(count).keys()].map(i => (
          <Div
            key={`at-sk=${i}`}
            bg={bg}
            h={15}
            mt="sm"
            w={i % 2 == 0 ? "100%" : "80%"}
            rounded="md"
          ></Div>
        ))}
      </Div>
    </RNAnimated.View>
  );
};

Skeleton.defaultProps = {
  bg: "gray400",
  avatar: false,
  count: 1
};

export { Skeleton };
