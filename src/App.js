import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Timer from './Timer.js';
// import Todo from './Todo.js'


class App extends Component {
  render() {
    return (
      <div className="App">

      <Form />
      <Timer />
      <Todo />



      </div>
    );
  }
}

export default App;
