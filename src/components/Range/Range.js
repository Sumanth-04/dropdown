import React, { Component } from 'react';
import { Range as RcRange } from 'rc-slider';


class Range extends Component {
	render(){
		return (
			<RcRange 
				{...this.props}
			/>
		)
	}
}

export default Range;