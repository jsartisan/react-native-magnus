import React from "react";
import renderer from "react-test-renderer";

import { Checkbox } from "../checkbox.component";
import { ThemeProvider } from "../../../theme";

describe("Checkbox Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const divInstance = instance.root.findByType(Checkbox);
    expect(divInstance.props.children).toBe(undefined);
  });

  it("should render with default checked", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Checkbox defaultChecked />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const comp = instance.root.findByType(Checkbox);
    expect(comp.props.defaultChecked).toBe(true);
  });
});
