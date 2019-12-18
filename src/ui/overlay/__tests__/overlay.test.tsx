import React from "react";
import renderer from "react-test-renderer";

import { Overlay } from "../overlay.component";
import { Div } from "../../div/div.component";
import { ThemeProvider } from "../../../theme";

describe("Overlay Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Overlay visible>
          <Div />
        </Overlay>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
