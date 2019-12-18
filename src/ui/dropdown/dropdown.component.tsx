import * as React from "react";
import { useContext, useState, useImperativeHandle } from "react";
import { SafeAreaView } from "react-native";
import RNModal from "react-native-modal";

import { Div } from "../div/div.component";
import { Text } from "../text/text.component";
import { ThemeContext } from "../../theme";
import { getStyle } from "./dropdown.style";
import { DropdownProps } from "./dropdown.type";

type dropdownRef = {
  open: () => void;
  close: () => void;
};

const Dropdown = React.forwardRef<dropdownRef, DropdownProps>((props, ref) => {
  const { title, showScrollIndicator, children, onSelect } = props;
  const theme = useContext(ThemeContext);
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
    }
  }));

  /**
   * render title
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === "string" ? (
        <Text fontSize="text400" color="gray700" px="xl" pt="md" pb="lg">
          {title}
        </Text>
      ) : (
        { title }
      );
    }

    return false;
  };

  /**
   * render scroll indicator
   */
  const renderIndicator = () => {
    return (
      showScrollIndicator && (
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
      swipeDirection={["down"]}
      backdropColor="black"
      onBackdropPress={() => setIsVisible(false)}
      style={{
        margin: 0,
        justifyContent: "flex-end"
      }}
    >
      <Div style={computedStyle.wrapper}>
        {renderIndicator()}
        <SafeAreaView pointerEvents="box-none">
          <Div style={computedStyle.container}>
            {renderTitle()}
            {React.Children.map(children, (child: React.ReactElement) => {
              return React.cloneElement(child, {
                onSelect
              });
            })}
          </Div>
        </SafeAreaView>
      </Div>
    </RNModal>
  );
});

Dropdown.defaultProps = {
  bg: "white",
  rounded: "none",
  flexDir: "column",
  showScrollIndicator: true,
  onSelect: () => {}
};

export { Dropdown };
