import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '../ListComponent/list';
import  { history } from 'react-router-dom'

import './item.scss';

var base64 = require('base-64');

export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Name: '', Size: '',  Comments: '' };
  }

  mySubmitHandler = (event) => {
    if(this.state.name !== ''){
      event.preventDefault();
      this.clear();
      appendQuery(this.state);
      alert(getQuery());
      console.log(getQuery());
    }
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

function getQuery(){
  let mySearchParams = window.location.search.split('')
  mySearchParams.shift();
  mySearchParams = mySearchParams.join('');
  if(mySearchParams ===  ""){
    return [];
  }
  return JSON.parse(base64.decode(mySearchParams));
  //remove the /  
}

function appendQuery(obj){
  console.log(getQuery);
  var query = getQuery();
  query.push(obj);
  var url = "?" + base64.encode(JSON.stringify(query));
  window.location.search = url;
}
