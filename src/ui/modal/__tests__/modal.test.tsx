import React from "react";
import renderer from "react-test-renderer";

import { Modal } from "../modal.component";
import { Div } from "../../div/div.component";
import { ThemeProvider } from "../../../theme";

describe("Modal Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Modal>
          <Div />
        </Modal>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
