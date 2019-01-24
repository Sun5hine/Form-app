import React, { Component } from 'react';
import './App.css';
import Form from "./Form.js"
import Timer from "./Timer.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Me />
      <Form />
      <Timer />


      </div>
    );
  }
}

export default App;
