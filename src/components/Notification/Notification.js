import React, { Component } from "react";
import { default as RcNotification } from "rc-notification";
import "./Notification.scss";
import Button from "../Button/index";
import PropTypes from "prop-types";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.msg,
    };
    var notification = null;
    RcNotification.newInstance({
      prefixCls:this.props.prefixCls,
      style:this.props.containerStyle,
      getContainer:this.props.getContainer,
      maxCount:this.props.maxCount,
    }, (n) => {
      this.notification = n;
    });
    this.simpleFn = this.simpleFn.bind(this);
    this.nonClosableFn = this.nonClosableFn.bind(this);
    this.closableFn = this.closableFn.bind(this);
  }
  simpleFn() {
    this.notification.notice({
      content: <span>{this.state.message}</span>,
      key:this.props.key,
      duration:this.props.duration,
      style:this.props.style,
      closeIcon:this.props.closeIcon,
      onClick:this.props.onClick,
      onClose:this.props.closeIcon,
      closable:true,
    });
  }
  nonClosableFn() {
    this.notification.notice({
      content: <span>{this.state.message}</span>,
      key:this.props.key,
      duration:null,
      style:this.props.style,
      closeIcon:this.props.closeIcon,
      onClick:this.props.onClick,
      onClose:this.props.closeIcon,
    });
  }

  closableFn() {
    this.notification.notice({
      content: <span>{<div style={{padding:'10px'}}>{this.props.header ? <div style={{fontSize : "18px" , paddingBottom:"15px"}}>{this.props.header}</div> : undefined}<div style={{fontSize:'14px'}}>{this.state.message}</div></div>}</span>,
      key:this.props.key,
      duration:null,
      style:this.props.style,
      closeIcon:this.props.closeIcon,
      onClose:this.props.closeIcon,      
      closable: true,
      onClick:this.props.onClick,
    });
  }
  render() {
    const { closable, auto } = this.props;
    if (closable) {
      if (auto) {
        return (
          <span >
            <div className={`rd-notification`} onClick={this.simpleFn}>
              {this.props.children}
            </div>
          </span>
        );
      } else {
        return (
          <span >
            <div className={`rd-notification`} onClick={this.closableFn}>
              {this.props.children}
            </div>
          </span>
        );
      }
    } else {
      return (
        <span >
          <div className={`rd-notification`} onClick={this.nonClosableFn}>
            {this.props.children}
          </div>
        </span>
      );
    }
  }
}
Notification.propTypes = {

  /*notification.notice(props)*/
  msg: PropTypes.string.isRequired,
  closable: PropTypes.bool,
  auto: PropTypes.bool,
  key:PropTypes.string,
  onClose:PropTypes.func,
  onClick:PropTypes.func,
  duration:PropTypes.number,
  /*In Seconds (Default=>1.5)*/
  style:PropTypes.object,
  closeIcon:PropTypes.node,

  /*Notification Container Props*/
  prefixCls:PropTypes.string,
  containerStyle:PropTypes.object,
  /*Default => {'top': 65, left: '50%'}*/
  getContainer:PropTypes.node,
  maxCount:PropTypes.number,
};
Notification.defaultProps = {
  closable: true,
  auto: false,
  containerStyle : {top:'20px',left:'50%'},
};

export default Notification;
