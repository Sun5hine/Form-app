import React from 'react';


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div>
      <h3> TODO </h3>
      

      <form onSubmit = {this.handleSubmit.bind(this)}>
      <input
       onChange = {this.handleChange.bind(this)}
       value = {this.state.text}
      />
      <button> Add item no: {this.state.items.length + 1 }</button>
      </form>
      <TodoList items = {this.state.items} />
      </div>
    );
  }

  handleChange(e){
     this.setState({ text: e.target.value });
   }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
render() {
  return (
    <ul>
      {this.props.items.map(i=> (
        <li key={i.id}>{i.text}</li>
      ))}
    </ul>

  );
}
}

export default Todo;
