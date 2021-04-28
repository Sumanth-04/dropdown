import React from "react";
import renderer from 'react-test-renderer';
import Collapse from "../Collapse";
import Panel from "../Panel";
//import {isTSAnyKeyword} from '@babel/types';

it("Collapse should have children and Content in each child", () => {
  const tree = renderer
		.create(
			<Collapse className="collapse" accordion={true}>
      <Panel header="Collapse Here >" headerClass="my-header-class">
        this is panel content
      </Panel>
      <Panel header="Collapse Here >">this is panel content2</Panel>
    </Collapse>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
  
});
