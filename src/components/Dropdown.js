import React, { Component } from "react";
import {default as DropdownRc} from "rc-dropdown";
import PropTypes from "prop-types";
import "rc-dropdown/assets/index.css";
import "./Dropdown.css";
class Dropdown extends Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      toggle : false,
    }
  }
  onBlur(){
    setTimeout(()=>{ 
      this.setState({toggle:false});;
    }, 200)
  }
  onClick(){
    this.setState({toggle:!this.state.toggle});
  }
  
  render() {
    return (
      <div>
        <DropdownRc
          className={this.props.className}
          name={this.props.name}
          prefixCls={this.props.prefixCls}
          visible={this.state.toggle}
          defaultVisible={this.props.defaultVisible}
          overlayClassName={this.props.overlayClassName}
          overlay={this.props.children}
          onOverlayClick={this.props.onOverlayClick}
          transitionName={this.props.transitionName}
          animation={this.props.animation}
          onVisibleChange={this.props.onVisibleChange}
          minOverlayWidthMatchTrigger={this.props.minOverlayWidthMatchTrigger}
          getPopupContainer={this.props.getPopupContainer}
          onClick={this.onClick}
          onBlur={this.onBlur}
        >
          <button>
            {this.props.name ? this.props.name : this.props.className}
            {this.props.showCaret? <i className="fa fa-caret-down" aria-hidden="true"></i> : undefined}
          </button>
        </DropdownRc>
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string,
  prefixCls: PropTypes.string,
  showCaret: PropTypes.bool.isRequired,
  transitionName: PropTypes.string,
  animation: PropTypes.string,
  onVisibleChange: PropTypes.func,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.node,
  onOverlayClick: PropTypes.func,
  minOverlayWidthMatchTrigger: PropTypes.bool,
  getPopupContainer: PropTypes.func
};
Dropdown.defaultProps = {
  className: "Dropdown",
  showCaret: true
};

export default Dropdown;
