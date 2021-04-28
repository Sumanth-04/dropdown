import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CardContent extends Component{
	static propTypes = {
		text: PropTypes.string.isRequired,
		textStyles: PropTypes.object,
		className: PropTypes.string,
	  };
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={`rd-cardContent ${this.props.className}`} style={{...this.props.textStyles}}>{this.props.text}</div>
		)
	}
}

export default CardContent;