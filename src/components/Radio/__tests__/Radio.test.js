import React from "react";
import renderer from "react-test-renderer";
import Radio from "../Radio";

it("Radio should have a child or label", () => {
  const tree = renderer
    .create(<Radio className="Radio" name="radAnswer" label="click" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
