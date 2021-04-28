import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CardAction extends Component{
	static propTypes = {
		action: PropTypes.func.isRequired,
		actionStyles: PropTypes.object,
		className: PropTypes.string
	  };
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<button className={`rd-cardAction ${this.props.className}`} style={{...this.props.actionStyles}} onClick={() => this.props.action()}>{this.props.actionText}</button>
		)
	}
}

export default CardAction;