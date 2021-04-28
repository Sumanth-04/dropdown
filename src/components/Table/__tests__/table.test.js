import React from "react";
import renderer from "react-test-renderer";
import Table from "../Table";

it("Table Renders with data and column props", () => {
  const tree = renderer
    .create(
      <Table
         columns={[{
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 100,
        }]} 
        data={[
          { name: 'Jack'}
        ]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
