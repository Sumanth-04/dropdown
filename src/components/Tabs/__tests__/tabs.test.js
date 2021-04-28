import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '../index'

it('Tab Renders with Content', () => {
	const tree = renderer
		.create(
			<Tabs>
				<div label="1">Hi</div>
				<div activeTab='2' label="2">Sup</div>
				<div label="3">Hello</div>
			</Tabs>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});