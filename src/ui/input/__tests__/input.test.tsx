import React from "react";
import renderer from "react-test-renderer";

import { Input } from "../input.component";
import { ThemeProvider } from "../../../theme";

describe("Input Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Input />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Input);
    expect(typeInstance.props.children).toBe(undefined);
  });
});
