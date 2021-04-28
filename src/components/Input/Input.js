import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './inputStyle.scss';

class Input extends Component{
	static propTypes = {
		label : PropTypes.element,
		inputStyles: PropTypes.object,
		className: PropTypes.string
	};
	
	constructor(props){
		super(props);
	}

	render(){
		const {
			label
		} = this.props;

		return (
			<div>
				{label ? <span className="rd-label">{label}</span> : null}
				<input className={`rd-input  ${this.props.className}`} style={{...this.props.inputStyles}} {...this.props}  />
			</div>
		)
	}
}

export default Input;