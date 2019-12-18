import React from "react";
import renderer from "react-test-renderer";

import { Tag } from "../tag.component";
import { ThemeProvider } from "../../../theme";

describe("Tag Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Tag />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeIns = instance.root.findByType(Tag);
    expect(typeIns.props.children).toBe(undefined);
  });
});
