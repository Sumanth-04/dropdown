import React, {Component} from 'react';
import Textarea from 'rc-textarea';
import PropTypes from 'prop-types';

import './inputStyle.scss';

class TextArea extends Component{
	static propTypes = {
		textAreaStyles: PropTypes.object,
		className: PropTypes.string,
	};
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Textarea className={`rd-textarea ${this.props.className}`} {...this.props} style={{...this.props.textAreaStyles}} />
		)
	}
}

export default TextArea;