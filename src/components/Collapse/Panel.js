import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Panel extends Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(){
		super()
		this.state = {
			showPanelBody : false
		}
	}

	togglePanelBody(){
		this.setState({showPanelBody : !this.state.showPanelBody})
	}

	render() {
		return (
			<div>
				<div onClick={() => this.togglePanelBody()}>
					<span>{this.props.header}</span>
				</div>
				<div style={{display : this.state.showPanelBody ? 'block' : 'none'}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Panel;