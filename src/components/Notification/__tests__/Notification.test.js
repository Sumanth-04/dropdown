import React from "react";
import renderer from "react-test-renderer";
import Notification from "../Notification";
//import {isTSAnyKeyword} from '@babel/types';

it("Notification should have a string child and msg", () => {
  const tree = renderer
    .create(
      <Notification
        msg="This is the content of the notification. This is the content of the notification. This is the content of the notification."
        onClick={() => {
          console.log("clicked");
        }}
        onClose={() => {
          console.log("closed");
        }}
        containerStyle={{ transition: "1s", top: "20px", left: "50%" }}
        auto={false}
      >
        Hover me for notification
      </Notification>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});