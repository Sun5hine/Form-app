import React from 'react';


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0};
    }

    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
     ComponentDidMount(){
       this.interval = setInterval(()=> this.tick(),1000);
     }
     ComponentWillUMount(){
       clearInterval(this.interval);
     }
    render(){
      return(
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
}

export default Timer;
