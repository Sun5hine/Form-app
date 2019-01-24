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
      </div>
    );
  }
}

export default Todo;
