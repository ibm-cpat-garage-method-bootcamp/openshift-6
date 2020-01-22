import React from 'react';
import ReactDOM from 'react-dom';

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
      <form onSubmit={this.mySubmitHandler}>
      <h1>Enter list</h1>
      <h1>Hello {this.state.name}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        id="name"
        onChange={this.myNameHandler}
      />
      <input
        type='text'
        onChange={this.mySizeHandler}
      />
      <input
        type='text'
        onChange={this.myCommentHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}