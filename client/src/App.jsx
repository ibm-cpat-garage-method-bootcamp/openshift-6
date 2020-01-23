import React, { Component } from "react";
import UIShell from "./components/UIShell";
import TableList from "./components/ListComponent/list";
import "./App.scss";
import DisplayForm from "./pattern-components/DisplayForm";
import MyForm from './components/ItemComponent/item';

import { 
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="table-container">
              <TableList></TableList>
              <button>add item</button>
          </div>
          <Route exact path='/form'>
            <MyForm />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
