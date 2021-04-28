import React from "react";
import renderer from 'react-test-renderer';
import Checkbox from "../Checkbox";
//import {isTSAnyKeyword} from '@babel/types';

it("Checkbox should have a label", () => {
    const tree = renderer
      .create(
        <Checkbox label="Check me!!"></Checkbox>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
});