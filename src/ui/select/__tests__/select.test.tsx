import React from "react";
import renderer from "react-test-renderer";

import { Div } from "../../div/div.component";
import { Select } from "../select.component";
import { ThemeProvider } from "../../../theme";

describe("Div Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Select
          value={1}
          onSelect={() => {}}
          data={[]}
          renderItem={() => <Div />}
        >
          <Div />
        </Select>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
