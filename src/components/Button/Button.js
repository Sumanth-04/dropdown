import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    buttonStyles: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    size : PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      props: { label },
    } = this;
    return (
      <button
        className={`rd-button rd-${this.props.type} ${this.props.size} rd- ${this.props.className} `}
        style={{ ...this.props.buttonStyles }}
        {...this.props}
      >
        {this.props.type === "search" ? (
          <i className="fa fa-search" aria-hidden="true"></i>
        ) : undefined}
        {this.props.type === "search-secondary" ? (
          <i className="fa fa-search" aria-hidden="true"></i>
        ) : undefined}
        {this.props.type === "search-icon-only" ? (
          <i className="fa fa-search" aria-hidden="true"></i>
        ) : undefined}
        {this.props.type === "search-icon-only-secondary" ? (
          <i className="fa fa-search" aria-hidden="true"></i>
        ) : undefined}
        {this.props.type === "search" ? <span> &nbsp;</span> : undefined}
        {this.props.type === "search-secondary" ? (
          <span> &nbsp;</span>
        ) : undefined}
        {this.props.children}{" "}
        {this.props.type === "search-icon-only" ||
        this.props.type === "search-icon-only-secondary"
          ? undefined
          : label}{" "}
      </button>
    );
  }
}

Button.defaultProps = {
  type: "primary",
  label : '',
  size : 'medium'
};

export default Button;
