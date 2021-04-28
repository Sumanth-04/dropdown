import React, { Component } from "react";
import "./Radio.scss";

class Radio extends Component {
  render() {
    const { label, children, className } = this.props;
    return (
      <span className="containers">
        <input
          type="radio"
          className = 'rd-radio'
          {...this.props}
        /><span class="checkmark"></span>
        {" "}
        {label ? label : children}
      </span>
    );
  }
}

export default Radio;
