import React from "react";
import renderer from "react-test-renderer";

import { ScrollDiv } from "../scrolldiv.component";
import { ThemeProvider } from "../../../theme";

describe("Scroll Div Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <ScrollDiv />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInst = instance.root.findByType(ScrollDiv);
    expect(typeInst.props.children).toBe(undefined);
  });
});
