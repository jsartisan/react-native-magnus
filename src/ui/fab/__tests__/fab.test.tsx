import React from "react";
import renderer from "react-test-renderer";

import { Fab } from "../fab.component";
import { ThemeProvider } from "../../../theme";

describe("Fab Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Fab icon="plus" />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Fab);
    expect(typeInstance.props.icon).toBe("plus");
  });
});
