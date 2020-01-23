import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '../ListComponent/list';
import  { history } from 'react-router-dom';


import './item.scss';

var base64 = require('base-64');

export default class MyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Name: '', Size: '',  Comments: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();

    if(this.state.Name !== ""){
      appendQuery(this.state);
      this.clear();
      console.log(getQuery());
    }
    else{
      alert("Please input name");
    }
  }

  getPath = () => {
    return this.props.location.pathname;
  }

  clear = () => {
    this.setState({ Name: '', Size: '',  Comments: '' , Aisle: '', Store: ''});
  }

  myNameHandler = (event) => {
    this.setState({Name: event.target.value.trim()});
  }

  mySizeHandler = (event) => {
    this.setState({Size: event.target.value});
  }

  myCommentHandler = (event) => {
    this.setState({Comments: event.target.value});
  }

  myStoreHandler = (event) => {
    this.setState({Store: event.target.value});
  }

  myAisleHandler = (event) => {
    this.setState({Aisle: event.target.value});
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
            <span data-testid='sizeDisplay'>Size: </span>
            <input
              type='text'
              data-testid="size"
              onChange={this.mySizeHandler}
            />
          </div>
          <div className="field">
            <span>Store:</span>
            <input
              type='text'
              data-testid="comment"
              onChange={this.myStoreHandler}
            />
          </div>
          <div className="field">
            <span>Aisle:</span>
            <input
              type='text'
              data-testid="comment"
              onChange={this.myAisleHandler}
            />
          </div>
          <div className="field">
            <span>Comment:</span>
            <input
              type='text-field'
              data-testid="comment"
              onChange={this.myCommentHandler}
            />
            <br />
            <br />
            <input id="submit" type='submit' />
          </div>
        </form>
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
  var found = false;

  query.forEach(ele => {
    if(ele.Name === obj.Name && ele.Store === obj.Store){
      found = true;
    }
  });

  if(!found){
    query.push(obj);
  }
  console.log(query);
  var url = "?" + base64.encode(JSON.stringify(query));
  window.location.search = url;
}
