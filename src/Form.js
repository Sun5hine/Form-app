import React from 'react';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    // this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('what should I add here?: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form >
     <label>
       Name:
       <input style={{color: 'green'}}type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
     </label>
    <input type="submit" value="Submit" />
   </form>


      </div>
    );
  }
}

export default Form;
