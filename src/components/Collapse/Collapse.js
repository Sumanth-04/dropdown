import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Collapse extends Component {
	static propTypes = {
		className: PropTypes.string,
	};

	setActiveKey = activeKey => {
		if (!('activeKey' in this.props)) {
		  this.setState({ activeKey });
		}
		this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
	  };

	onClickItem = key => {
		let activeKey = this.state.activeKey;
		if (this.props.accordion) {
		  activeKey = activeKey[0] === key ? [] : [key];
		} else {
		  activeKey = [...activeKey];
		  const index = activeKey.indexOf(key);
		  const isActive = index > -1;
		  if (isActive) {
			// remove active state
			activeKey.splice(index, 1);
		  } else {
			activeKey.push(key);
		  }
		}
		this.setActiveKey(activeKey);
	  };
	
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default Collapse;