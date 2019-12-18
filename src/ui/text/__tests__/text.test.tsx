import React from "react";
import renderer from "react-test-renderer";

import { Text } from "../text.component";
import { ThemeProvider } from "../../../theme";

describe("Text Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Text />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInst = instance.root.findByType(Text);
    expect(typeInst.props.children).toBe(undefined);
  });
});
