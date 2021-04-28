import React, { Component } from "react";
import RcDrawer from "rc-drawer";
import "./Drawer.scss";

class Drawer extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }
  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <RcDrawer
          maskClosable={true}
          onClose={this.toggleDrawer}
          open={this.state.open}
          {...this.props}
        />
        {<span onClick={this.toggleDrawer}>{this.props.opener}</span>}
      </div>
    );
  }
}

export default Drawer;
