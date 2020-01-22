import React, { Component } from "react";
import UIShell from "./components/UIShell";
import TableList from "./components/ListComponent/list";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableList></TableList>
      </div>
    );
  }
}

export default App;
