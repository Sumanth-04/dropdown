import React, { Component } from 'react';
import Menu, { Item as MenuItem } from 'rc-menu';
import './index.scss';
import PropTypes from 'prop-types';

export class NavItem extends React.Component {
	static propTypes = {
			navbarStyles: PropTypes.object,
		};
	render() {
		return (
			<MenuItem className={`"rc-menu-item menuItem " ${this.props.className}`} key={this.props.key} {...this.props}>{this.props.children}</MenuItem>
		)
	}
}

export class NavHeader extends React.Component {
	static propTypes = {
		navbarStyles: PropTypes.object,
		};
	render() {
		return (
			<div>{this.props.children}</div>
		)
	}
}

const customizeIndicator = <span>Add More Items</span>;

export default class NavBar extends Component {
	state = {
		overflowedIndicator: undefined,
	};

	/*toggleChildren = () => {
		this.setState(({ children }) => ({
			children: children === children1 ? children2 : children1,
		}));
	};
	*/
	toggleOverflowedIndicator = () => {
		this.setState(({ overflowedIndicator }) => ({
			overflowedIndicator:
				overflowedIndicator === undefined ? customizeIndicator : undefined,
		}));
	};

	render() {
		const { triggerSubMenuAction, children ,navbarStyles} = this.props;
		const { overflowedIndicator } = this.state;

		return (
			<div>
				<Menu
					onClick={this.props.onClick}
					triggerSubMenuAction={triggerSubMenuAction}
					onOpenChange={this.props.onOpenChange}
					selectedKeys={['3']}
					mode={this.props.mode}
					openAnimation={this.props.openAnimation}
					defaultOpenKeys={this.props.defaultOpenKeys}
					overflowedIndicator={overflowedIndicator}
					motion={this.props.motion}
					className={`"rd-menu " ${this.props.className}`}
					style={{...navbarStyles}}
				>
					{children}
				</Menu>
			</div>
		);
	}
}