import React, { Component } from "react";
import RcCheckbox from "rc-checkbox";
import "./Checkbox.scss";

class CheckBox extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  render() {
    const { children, label ,round } = this.props;
    var radius = '3px';
    if(round) {radius = '10px';}
    return (
      <span>
        <RcCheckbox className="rd-checkbox" style={{borderRadius : radius}} {...this.props} />{" "}
        {label ? label : children}
      </span>
    );
  }
}

export default CheckBox;
