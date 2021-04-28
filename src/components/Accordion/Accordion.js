import React, { Component } from 'react';
import './index.scss';
import PropTypes from 'prop-types';


class Accordion extends Component {
	static propTypes = {
		onClick: PropTypes.func,
		children: PropTypes.instanceOf(Array).isRequired
	}


	constructor(props) {
		super(props);


		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}


	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	}


	render() {
		const { children } = this.props;
		const { activeTab } = this.state;


		return (
			<div className={``}>
			{
					children.map((child) => {
						const { label, action, headingImage, headingBody , accordionColor} = child.props;
						
						return (
							<div>
								{/* accordion header */}
								<div className={`accordion`} style={{background:accordionColor}} onClick={() => { this.onClickTabItem(label) }}>
									<div className="rd-accordionHeader">
										<div>{label}</div>
										{headingBody ? <div>{headingBody}</div> : null}
									</div>
									<div>{headingImage ? <img className={`rd-accordionImage`} src={`${headingImage}`} alt="accordion" /> : null}</div>
									
									{/* accordion body */}
									<div className='rd-accordionBody'>
									{
										child.props.label == activeTab ? child.props.children : undefined
									}
								</div>
								</div>
							</div>
						);
					})
				}
			</div>

		)
	}
}



export default Accordion;




// ®
	// children.map((child) => {
	// 	const { label, action, headingImage, headingBody } = child.props;
	// 	return (
	// 		<div>
	// 			{/* accordion header */}
	// 			<div className="accordion" onClick={() => { this.onClickTabItem(label) }}>
	// 				<div className="rd-accordionHeader">
	// 					<div>{label}</div>
	// 					{headingBody ? <div>{headingBody}</div> : null}
	// 				</div>
	// 				<div>{headingImage ? <img className={`rd-accordionImage`} src={`${headingImage}`} alt="accordion" /> : null}</div>
	// 			</div>
	// 			{/* accordion body */}
	// 			{
	// 				child.props.label == activeTab ? child.props.children : undefined
	// 			}
	// 		</div>
	// 	);
	// })
