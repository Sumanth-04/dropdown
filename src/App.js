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
          className="Dropdown-className"
          name="Death Note "
          overlayClassName="dropdown-overlay"
          showCaret={true}
        >
          <Menu>
            <MenuItem key="1">Light Yagami</MenuItem>
            <MenuItem key="2">L Lawliet</MenuItem>
          </Menu>
        </Drpdown>
      </div>
    );
  }
}

export default App;
