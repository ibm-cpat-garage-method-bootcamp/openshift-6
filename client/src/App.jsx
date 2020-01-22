import React, { Component } from "react";
import UIShell from "./components/UIShell";
import TableList from "./components/ListComponent/list";
import "./App.scss";
import DisplayForm from "./pattern-components/DisplayForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayForm></DisplayForm>
      </div>
    );
  }
}

export default App;
