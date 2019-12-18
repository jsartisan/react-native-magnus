import React from "react";
import renderer from "react-test-renderer";

import { Box } from "../skeleton.component";
import { ThemeProvider } from "../../../theme";

describe("Skeleton Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Box />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeIns = instance.root.findByType(Box);
    expect(typeIns.props.children).toBe(undefined);
  });
});
