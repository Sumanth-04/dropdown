import React from "react";
import renderer from 'react-test-renderer';
import Accordion from "../Accordion";
//import {isTSAnyKeyword} from '@babel/types';

it("Accordion should have a single child and options in that child (Use div tag)", () => {
  const tree = renderer
    .create(
      <Accordion>
        <div key='1' label="HEllo">
          HEllo Body
        </div>
        <div key='2' label="Hi">
          Hi Body
        </div>
        <div key='3' label="Good">
          GOod Body
        </div>
      </Accordion>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();

  /*const div = document.createElement("div");
  ReactDOM.render(
        
        , div
    );*/
});