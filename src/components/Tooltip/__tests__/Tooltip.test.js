import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "../Tooltip";

it("Tooltip should have a single child and overlay", () => {
  const tree = renderer
    .create(
      <Tooltip data="as" header="Header" arrowPoint="top">
        Hi
      </Tooltip>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});