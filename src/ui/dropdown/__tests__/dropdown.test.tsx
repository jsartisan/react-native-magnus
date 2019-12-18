import React from "react";
import renderer from "react-test-renderer";

import { Dropdown } from "../dropdown.component";
import { Option } from "../option.component";
import { ThemeProvider } from "../../../theme";

describe("Dropdown Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Dropdown onSelect={() => {}}>
          <Option value={1} />
        </Dropdown>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
