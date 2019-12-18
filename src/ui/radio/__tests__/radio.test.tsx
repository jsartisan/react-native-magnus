import React from "react";
import renderer from "react-test-renderer";

import { Radio } from "../radio.component";
import { ThemeProvider } from "../../../theme";

describe("Radio Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Radio />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
