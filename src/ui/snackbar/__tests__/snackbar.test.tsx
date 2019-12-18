import React from "react";
import renderer from "react-test-renderer";

import { Snackbar } from "../snackbar.component";
import { ThemeProvider } from "../../../theme";

describe("Snackbar Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Snackbar>Snack</Snackbar>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInst = instance.root.findByType(Snackbar);
    expect(typeInst.props.children).toBe("Snack");
  });
});
