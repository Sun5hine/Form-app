import React, { Component } from 'react';
import './App.css';
import Form from "./Form.js"
import Me from "./Me.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Me />
      <Form />
      <h1> let's get cracking </h1>


      </div>
    );
  }
}

export default App;
