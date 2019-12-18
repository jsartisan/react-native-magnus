import React from "react";
import renderer from "react-test-renderer";

import { Avatar } from "../avatar.component";
import { ThemeProvider } from "../../../theme";

describe("Avatar Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Avatar>1</Avatar>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Avatar);
    expect(typeInstance.props.children).toBe("1");
  });

  it("should render with props", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Avatar m="md" p="md" size={100} color="red500" bg="red500" shadow={1}>
          1
        </Avatar>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Avatar);
    expect(typeInstance.props.children).toBe("1");
  });
});
