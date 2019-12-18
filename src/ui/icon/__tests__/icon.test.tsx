import React from "react";
import renderer from "react-test-renderer";

import { Icon } from "../icon.component";
import { ThemeProvider } from "../../../theme";

describe("Icon Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Icon name="plus" />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Icon);
    expect(typeInstance.props.name).toBe("plus");
  });
});
