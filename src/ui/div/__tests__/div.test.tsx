import React from "react";
import renderer from "react-test-renderer";

import { Div } from "../div.component";
import { ThemeProvider } from "../../../theme";

describe("Avatar Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Div />
      </ThemeProvider>
    );

    const divInstance = instance.root.findByType(Div);
    expect(divInstance.props.children).toBe(undefined);
  });

  it("should render with props", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Div bg="red500" />
      </ThemeProvider>
    );

    const divInstance = instance.root.findByType(Div);
    expect(divInstance.props.bg).toBe("red500");
  });
});
