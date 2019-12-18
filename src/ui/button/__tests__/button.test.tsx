import React from "react";
import renderer from "react-test-renderer";

import { Button } from "../button.component";
import { ThemeProvider } from "../../../theme";

describe("Button Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Button>Press me</Button>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Button);
    expect(typeInstance.props.children).toBe("Press me");
  });
});
