import React, { Component } from "react";
import Select from "rc-select";
//import AutoComplete from "react-autocomplete";
import PropTypes from "prop-types";
import "./autoComplete.scss";
//import "./index.css";

class Search extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.element),
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className="rd-searchBar">
          <i className="fa fa-search"></i>
          <p>|</p>
          <Select
            className="rd-searchBar-primary"
            options={this.props.options}
            mode="combobox"
            notFoundContent="Enter Make or Model"
            style={{ ...this.props.style }}
            onChange={this.props.onChange}
            {...this.props}
            placeholder="Enter Make or Model"
          />
        </div>
      </div>
    );
  }
}

export default Search;
