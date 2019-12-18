import React from "react";
import renderer from "react-test-renderer";

import { Image } from "../image.component";
import { ThemeProvider } from "../../../theme";

describe("Image Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Image source={{ uri: "http://google.com" }} />
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});
