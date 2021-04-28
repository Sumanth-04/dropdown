import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { default as DropdownRc } from "rc-dropdown";
import PropTypes, { array, node } from "prop-types";
import Menu, { Item as MenuItem } from "rc-menu";
import "./index.scss";
import "./Dropdown.scss";

class Dropdown extends Component {
  constructor(props) {
    super();
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.state = {
      toggle: false,
      name: props.name,
      className: props.className,
      selected: undefined,
    };
  }
  onBlur() {
    setTimeout(() => {
      this.setState({ toggle: false });
    }, 300);
  }
  onClick(e) {
    e.preventDefault();
    this.setState({ toggle: !this.state.toggle });
  }
  onMenuItemClick(e) {
    this.setState({ selected: e.item.props.children });
  }
  /*componentDidMount(){
    var btnwidth = ReactDOM.findDOMNode(this).getElementsByClassName('rd-dropdown');
    console.log(btnwidth)
  }*/

  render() {
    var arrOfChildren = [];
    var Child ;
    if(this.props.overlay){
      if(typeof(this.props.overlay) != node)
      {  
        arrOfChildren = this.props.overlay.props.children.map((val, index) => {
          return (
            <MenuItem onClick={this.onMenuItemClick} key={index}>
              {val.props.children}
            </MenuItem>
          );
        });
      }else{
        Child = <MenuItem onClick={this.onMenuItemClick}>{this.props.overlay}</MenuItem>
      }
    }else{
      if(typeof(this.props.children) != node)
      {
        arrOfChildren = this.props.children.props.children.map((val, index) => {
          return (
            <MenuItem onClick={this.onMenuItemClick} key={index}>
              {val.props.children}
            </MenuItem>
          );
        });
      }else{
        Child = <MenuItem onClick={this.onMenuItemClick}>{this.props.children}</MenuItem>
      }
    }
    
    var itemstoshow = (
      <Menu onSelect={this.props.onSelect} /*style={{width : this.state.btn_width }}*/>
        {arrOfChildren.map((val, i) => {
          return val;
        })}
      </Menu>
    );

    return (
      <div>
        <DropdownRc
          className={`rd-${this.props.className}`}
          name={this.props.name}
          prefixCls={this.props.prefixCls}
          visible={this.state.toggle}
          defaultVisible={this.props.defaultVisible}
          overlayClassName={this.props.overlayClassName}
          overlay={itemstoshow}
          onOverlayClick={this.props.onOverlayClick}
          transitionName={this.props.transitionName}
          animation={this.props.animation}
          onVisibleChange={this.props.onVisibleChange}
          minOverlayWidthMatchTrigger={this.props.minOverlayWidthMatchTrigger}
          getPopupContainer={this.props.getPopupContainer}
          onClick={this.onClick}
          onBlur={this.onBlur}
          {...this.props}
        >
          <button className="rd-dropdown" style={this.props.style}>
            {this.state.selected === undefined || this.state.selected === ""
              ? this.state.name
                ? this.state.name
                : this.state.className
              : this.state.selected}

            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            {this.props.showCaret ? (
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            ) : undefined}
          </button>
        </DropdownRc>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onSelect : PropTypes.func,
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
  getPopupContainer: PropTypes.func,
};
Dropdown.defaultProps = {
  className: "--select--",
  showCaret: true,
};

export default Dropdown;
