import React from "react";
import renderer from "react-test-renderer";

import { Drawer } from "../drawer.component";
import { ThemeProvider } from "../../../theme";

describe("Drawer Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Drawer />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Drawer);
    expect(typeInstance.props.children).toBe(undefined);
  });
});
