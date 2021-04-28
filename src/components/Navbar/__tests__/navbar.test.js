import React from "react";
import renderer from "react-test-renderer";
import NavBar from "../index";
import { NavItem, NavHeader } from "../Navbar";
//import {isTSAnyKeyword} from '@babel/types';

it("Rendering NavBar", () => {
  const tree = renderer
    .create(
      <NavBar>
        <NavItem navbarStyles={{height : '80px'}}> Redapt Components Library</NavItem>
        <NavItem>
          <br />
        </NavItem>
      </NavBar>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it("NavBar", () => {
  const tree = renderer
    .create(
      <NavBar>
        <NavHeader navbarStyles={{height : '80px'}}>React</NavHeader>
        <NavItem>
          NavBar Items
        </NavItem>
        <NavItem><br /></NavItem>
      </NavBar>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});