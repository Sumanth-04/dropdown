import React from "react";
import Search from "../Search";
import renderer from 'react-test-renderer';

const options = [<div>HI</div>, <div>HI</div>, <div>HI</div>];

it("Rendering AutoComplete", () => {
  const tree = renderer.create(
    <Search options={options} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
