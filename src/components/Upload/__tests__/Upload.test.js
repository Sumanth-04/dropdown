import React from "react";
import renderer from 'react-test-renderer';
import Upload from "../Upload";

it("Upload should have string child", () => {
  const tree = renderer
    .create(
      <Upload
        className="upload-btn"
        multiple={true}
        onError={(err, res, file) => {
          console.log("Cant upload " + err);
        }}
      >
        Upload from here
      </Upload>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
