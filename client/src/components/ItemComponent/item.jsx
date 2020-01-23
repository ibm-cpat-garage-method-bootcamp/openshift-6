import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '../ListComponent/list';
import  { history } from 'react-router-dom'

import './item.scss';

export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Name: '', Size: '',  Comments: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.clear();
    alert("You are submitting " + Object.entries(this.state));
    console.log(getPath());
  }

  getPath = () => {
    return this.props.location.pathname;
  }

  clear = () => {
    this.setState({ Name: '', Size: '',  Comments: '' });
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
      )
  }
}

function getPath(){
  return window.location.path;
}

function addToPath(obj){
  var charArr = obj.split('');
  var queries = window.location.search;
  //remove the /
  charArr.shift();
  
}