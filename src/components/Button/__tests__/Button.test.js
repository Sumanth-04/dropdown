import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

it("Button should have a type and label", () => {
  const tree = renderer
    .create(<Button type="primary" label="Primary Button" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});