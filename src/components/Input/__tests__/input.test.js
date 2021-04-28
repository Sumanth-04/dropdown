import React from "react";
import renderer from "react-test-renderer";
import Input from "../Input";
import TextArea from "../index";
//import {isTSAnyKeyword} from '@babel/types';

it("Input should have a label", () => {
  const tree = renderer
    .create(
      <Input
        label={<span>Enter Your Name</span>}
        placeholder="First Name"
      ></Input>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("TextArea should have a label", () => {
  const tree = renderer
    .create(
      <Input.TextArea textAreaStyles={{}} placeholder="First Name"></Input.TextArea>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});