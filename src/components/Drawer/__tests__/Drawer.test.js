import React from "react";
import renderer from "react-test-renderer";
import Drawer from "../Drawer";
import Button from "../../Button/index";
import Menu from "rc-menu";

it("Rendering Drawer", () => {
  const tree = renderer
    .create(
      <Drawer opener={<Button>Open</Button>} width="250px">
        <Menu style={{ background: "white", color: "#1D3C56" }}>Option</Menu>
      </Drawer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
