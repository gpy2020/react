import React, {Component} from 'react';
import Counter from '../views/Counter'

class CounterContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        counter: 0
      };
    }
    
    handleIncrease = () => {
      this.setState({counter: this.state.counter + 1});
    }
  
    handleDecrease = () => {
      if(this.state.counter > 0) {
        this.setState({counter: this.state.counter - 1});
      }
    }
  
    handleReset = () => {
      this.setState({counter: 0});
    }
  
    render() {
      return <Counter 
                counter = {this.state.counter} 
                handleDecrease = {this.handleDecrease}
                handleIncrease = {this.handleIncrease}
                handleReset = {this.handleReset}
            /> 
    }
  }
  
  export default CounterContainer;
  