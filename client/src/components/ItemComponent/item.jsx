import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '../ListComponent/list';
import './item.scss';
var fs = require('fs');

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: '', Size: '',  Comments: '' };
  }

  mySubmitHandler = (event) => {
    alert("You are submitting " + Object.entries(this.state));
    console.log("You are submitting " + Object.entries(this.state));
    var data = this.state;
    console.log(data);
    this.writeData(data);
  }

  writeData = (data) => {
    var oldData = require('../storeComponent/data.json');
    var newData = Object.assign({}, data, oldData.data);
    console.log(oldData.data);
    fs.writeFileSync('../storeComponent/data.json', newData);
  }

  myNameHandler = (event) => {
    this.setState({Name: event.target.value});
  }

  mySizeHandler = (event) => {
    this.setState({Size: event.target.value});
  }

  myCommentHandler = (event) => {
    this.setState({Comments: event.target.value});
  }

  render() {
    return (
      <div>
      <div id="container">
        <form onSubmit={this.mySubmitHandler}>
          <h1 id="header_list">Enter Item</h1>
          <div className="field">
            <span data-testid='nameDisplay'>Name:</span>
            <input
              type='text'
              data-testid="name"
              onChange={this.myNameHandler}
            />
          </div>
          <div className="field">
            <span>Comment:</span>
            <input
              type='text'
              data-testid="comment"
              onChange={this.myCommentHandler}
            />
          </div>
          <div className="field">
            <span data-testid='sizeDisplay'>Size: </span>
            <input
              type='text'
              data-testid="size"
              onChange={this.mySizeHandler}
            />
            <br />
            <br />
            <input id="submit" type='submit' />
          </div>
        </form>
      </div>
      <div id="table_list">
        <TableList></TableList>
      </div>
      </div>
    );
  }
}