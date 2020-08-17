import React from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Menu, { Item as MenuItem } from "rc-menu";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <Dropdown
          className="Dropdown-className"
          name="Model "
          overlayClassName="dropdown-overlay"
          showCaret={true}
        >
          <Menu>
            <MenuItem key="1">Light Yagami</MenuItem>
            <MenuItem key="2">L Lawliet</MenuItem>
            <MenuItem key="3">Ryuk (Shinigami)</MenuItem>
          </Menu>
        </Dropdown>
      </div>
    );
  }
}

export default App;
