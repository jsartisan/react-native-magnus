import * as React from "react";
import { Icon } from "../icon/icon.component";
import { Button } from "../button/button.component";
import { FabProps } from "./fab.type";

const Fab: React.FunctionComponent<FabProps> = props => {
  const { icon, ...rest } = props;

  return (
    <Button
      prefix={
        typeof icon === "string" ? <Icon color="white" name={icon} /> : icon
      }
      {...rest}
    />
  );
};

Fab.defaultProps = {
  bg: "blue600",
  p: "lg",
  color: "white",
  rounded: "circle",
  position: "absolute",
  bottom: 20,
  right: 20,
  loading: false,
  disabled: false,
  loaderSize: "text400",
  loaderColor: "gray400",
  block: false,
  shadowColor: "gray800",
  shadow: 0,
  fontSize: "text400",
  rippleColor: "white",
  ripple: true,
  borderless: true,
  center: true,
  alignItems: "center",
  justifyContent: "center",
  onPress: () => {},
  flexDir: "row",
  icon: "plus"
};

export { Fab };
