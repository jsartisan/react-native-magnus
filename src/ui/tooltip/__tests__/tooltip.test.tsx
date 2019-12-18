import React from "react";
import renderer from "react-test-renderer";

import { Tooltip } from "../tooltip.component";
import { ThemeProvider } from "../../../theme";

describe("Div Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Tooltip text="Tooltip text">Tooltip</Tooltip>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInst = instance.root.findByType(Tooltip);
    expect(typeInst.props.children).toBe("Tooltip");
  });
});
