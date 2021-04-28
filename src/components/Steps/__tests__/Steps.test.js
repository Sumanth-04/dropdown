import React from "react";
import renderer from "react-test-renderer";
import Steps from "../Steps";

it("Steps should have a single child or multiple children and description or children in each child is compulsary(Use div tag)", () => {
  const tree = renderer
    .create(
      <Steps className="Steps">
        <div
          title="Personal Details"
          subTitle="Subtitle"
          description={
            <div>
              <input type="text" placeholder="First Name" />Enter First Name
              <input type="text" placeholder="Last Name" />Enter Last Name 
            </div>
          }
        ></div>
        <div
          title="Professional Details"
          subTitle="Subtitle"
          description={
            <div>
              <input type="text" placeholder=" Name" />
              <input type="text" placeholder=" Name" />
            </div>
          }
        ></div>
        <div title="Social" subTitle="Subtitle">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Second Name" />
        </div>
      </Steps>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
