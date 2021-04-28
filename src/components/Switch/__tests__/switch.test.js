import React from "react";
import renderer from "react-test-renderer";
import Switch from "../../Switch/Switch";

it("Switch uses default scss and can have checkedChildren uncheckedChildren as props", () => {
  const tree = renderer
    .create(
      <Switch
        disabled={false}
        checkedChildren="开"
        unCheckedChildren="关"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
