import React from "react";
import "./App.css";
import Drpdown from "./components/Drpdown";
import Menu, { Item as MenuItem } from "rc-menu";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <Drpdown
          className="Dropdown-className "
          defaultVisible={true}
          overlayClassName="dropdown-overlay"
          showCaret={true}
        >
          <Menu>
            <MenuItem key="1">1st item is Hi</MenuItem>
            <MenuItem key="2">2nd item is Hello</MenuItem>
          </Menu>
        </Drpdown>
      </div>
    );
  }
}

export default App;
