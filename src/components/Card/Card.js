import React, {Component} from 'react';
import './cardStyle.scss';
import PropTypes from 'prop-types';

class Card extends Component{
	static propTypes = {
		cardStyles: PropTypes.object,
		className: PropTypes.string,
		};
		
	constructor(props){
		super(props);
	}

	render(){
		const {
			className,
			cardStyles,
			children,
			loading,
			loader
		} = this.props;

		return (
			<div className={`rd-card ${className}`} style={{...cardStyles}}>
				{loading ? loader : children}
			</div>
		)
	}
}

export default Card;