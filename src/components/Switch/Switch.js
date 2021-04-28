import React from 'react';
import Switch from 'rc-switch';
import PropTypes from 'prop-types';
import './index.scss';
//import 'rc-switch/assets/index.css';

class SwitchTab extends React.Component {
  static propTypes = {
		className: PropTypes.string,
  };
  
  render() {
    return (
      <div>
        <Switch className={`rd-switch ${this.props.className}`}
			      {...this.props}
        />
      </div>
    );
  }
}

export default SwitchTab;