import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../index'

const CardAction = Card.CardAction;
const CardContent = Card.CardContent;
const CardImage = Card.CardImage;

const hi = () => { console.log("hi") }

it('Card Renders with image, content, actions', () => {
	const tree = renderer
		.create(
			<Card>
				<CardImage
					alt={"example"}
					src={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}
				/>
				<CardContent
					text={'Hello'}
					textStyles={{
						color: 'red'
					}}
				/>
				<CardAction
					actionStyles={{
						background: 'red'
					}}
					action={hi}
					actionText={"Action!"}
				/>
			</Card>
		)
		.toJSON();
		expect(tree).toMatchSnapshot();
});