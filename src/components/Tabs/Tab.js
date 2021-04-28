import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
import './tabStyle.scss'

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        action
      },
    } = this;

    let className = `${this.props.NavType}-list-item`;

    if (activeTab === label) {
      className += ` ${this.props.NavType}-list-active`;
    }

    return (
            <li className={`rd-${this.props.NavType}`} onClick={action}>
              <a className={`rd-${this.props.NavType}-item ${className}`}  onClick={onClick}>{label}</a>
            </li>
    );
  }
}

export default Tab;