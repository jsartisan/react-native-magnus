import React from "react";
import renderer from "react-test-renderer";

import { Div } from "../div.component";
import { ThemeProvider } from "../../../theme";

describe("Div Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Div />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const divInstance = instance.root.findByType(Div);
    expect(divInstance.props.children).toBe(undefined);
  });
});
