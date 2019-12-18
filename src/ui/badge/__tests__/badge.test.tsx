import React from "react";
import renderer from "react-test-renderer";

import { Badge } from "../badge.component";
import { Avatar } from "../../avatar/avatar.component";
import { ThemeProvider } from "../../../theme";

describe("Badge Component", () => {
  it("should render without issues", () => {
    const instance = renderer.create(
      <ThemeProvider>
        <Badge>
          <Avatar>1</Avatar>
        </Badge>
      </ThemeProvider>
    );

    expect(instance.toJSON()).toMatchSnapshot();

    const typeInstance = instance.root.findByType(Avatar);
    expect(typeInstance.props.children).toBe("1");
  });
});
