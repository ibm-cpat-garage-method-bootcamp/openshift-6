import React, { Component } from "react";
import UIShell from "./components/UIShell";
import TableList from "./components/ListComponent/list";
import "./App.scss";
import DisplayForm from "./pattern-components/DisplayForm";
import MyForm from './components/ItemComponent/item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm></MyForm>
      </div>
    );
  }
}

export default App;
