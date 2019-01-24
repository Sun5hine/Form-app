import React from 'react';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
  }
  render(){
    return(
      <div>
      <h3> TODO </h3>
      <TodoList items = {this.state.items} />
      <form onSubmit = {this.handleSubmit}>
      <label htmlFor="new-todo">
      What you want to do?
      </div>
    );
  }
}

export default Todo;
