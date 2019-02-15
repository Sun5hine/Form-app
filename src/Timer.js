import React from 'react';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

tick(){
  this.setState(state => ({
    seconds: state.seconds + 8
  }));
}
 componentDidMount(){
   this.interval = setInterval(()=>this.tick(), 10000);
 }

     componentWillUMount() {
       clearInterval(this.interval);
     }
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
}

export default Timer;
