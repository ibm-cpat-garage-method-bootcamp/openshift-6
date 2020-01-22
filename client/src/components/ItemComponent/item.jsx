import React from 'react';
import ReactDOM from 'react-dom';
import TableList from '../ListComponent/list';
import './item.scss';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', size: '',  comment: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + Object.entries(this.state));
    console.log("You are submitting " + Object.entries(this.state));
  }

  myNameHandler = (event) => {
    this.setState({name: event.target.value});
  }

  mySizeHandler = (event) => {
    this.setState({size: event.target.value});
  }

  myCommentHandler = (event) => {
    this.setState({comment: event.target.value});
  }

  render() {
    return (
      <div>
      <div id="container">
        <form onSubmit={this.mySubmitHandler}>
          <h1>Enter Item</h1>
          <div className="field">
            <span data-testid='nameDisplay'>Name: </span>
            <input
              type='text'
              data-testid="name"
              onChange={this.myNameHandler}
            />
          </div>
          <div className="field">
            <span>Comment: </span>
            <input
              type='text'
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