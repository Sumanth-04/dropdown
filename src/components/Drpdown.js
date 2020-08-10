import React, { Component } from "react";
import Dropdown from "rc-dropdown";
import PropTypes from 'prop-types';
import "rc-dropdown/assets/index.css";
import "./Drpdown.css";
class Drpdown extends Component {
  componentDidMount(props) {
      if(this.props.visible){
          //add visible props explicitly
        Dropdown.defaultProps = {
            visible : props.visible
        }
      }
  }
  render() {
    return (
      <div>
        <Dropdown
          className={this.props.className}
          prefixCls={this.props.prefixCls}
          /*visible={this.props.visible}*/
          defaultVisible={this.props.defaultVisible}
          overlayClassName={this.props.overlayClassName}
          overlay={this.props.children}
          onOverlayClick={this.props.onOverlayClick}
          transitionName={this.props.transitionName}
          animation={this.props.animation}
          onVisibleChange={this.props.onVisibleChange}
          minOverlayWidthMatchTrigger={this.props.minOverlayWidthMatchTrigger}
          getPopupContainer={this.props.getPopupContainer}
        >
          <button>{this.props.className}</button>
          
        </Dropdown>
      </div>
    );
  }
}

Drpdown.propTypes = {
    className : PropTypes.string.isRequired, 
    prefixCls : PropTypes.string,
    transitionName : PropTypes.string,
    animation : PropTypes.string,
    onVisibleChange : PropTypes.func,
    /*visible : PropTypes.bool,*/
    defaultVisible : PropTypes.bool,
    overlay : PropTypes.node,
    onOverlayClick : PropTypes.func ,
    minOverlayWidthMatchTrigger : PropTypes.bool,
    getPopupContainer : PropTypes.func
}
Drpdown.defaultProps = {
    className : 'Dropdown'
}




export default Drpdown;
