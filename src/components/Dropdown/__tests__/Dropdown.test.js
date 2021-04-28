import React from "react";
import Dropdown from "../Dropdown";
import renderer from "react-test-renderer";

it("Dropdown should have a single child and options in that child (Use div tag)", () => {
  const tree = renderer
    .create(
      <Dropdown name="Click me">
        <div>
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      </Dropdown>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});