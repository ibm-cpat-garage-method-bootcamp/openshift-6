import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', size: '',  comment: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.name);
  }

  myChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.name}</h1>
      <p>Enter your name, and submit:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}

export default MyForm;
