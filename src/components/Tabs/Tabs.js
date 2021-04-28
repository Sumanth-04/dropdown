import React, { Component } from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';
import './index.css'
import './tabStyle.scss'

class Tabs extends Component {
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
		//console.log(this.props.children)
		const {
			onClickTabItem,
			props: {
				children,
				NavType
			},
			state: {
				activeTab,
			}
		} = this;

		return (
			<div>
				<ul className={`rd_${NavType}s`}>
					{children.map((child) => {
						const { label, action } = child.props;
						return (
							<Tab
								NavType={NavType}
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={onClickTabItem}
								action={action}
							/>
						);
					})}
				</ul>
				<div className="tab-content">
					{children.map((child) => {
						if (child.props.label !== activeTab) return undefined;
						return child.props.children;
					})}
				</div>
			</div>
		)
	}
}

Tabs.defaultProps = {
	NavType: 'tab'
};
  
export default Tabs;