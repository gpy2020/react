import React, { Component } from 'react';
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

  componentDidMount() {
    console.log('Children: componentDidMount');
  }

  componentDidUpdate() {
    console.log('Children: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Children: componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Children: shouldComponentUpdate');
    if(nextProps.func !== this.props.func || nextState !== this.state) {
      console.log(`${this.props.index}:component will update`);
      return true;
    }
    console.log(`${this.props.index}:component will not update`);
    return false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('Children: UNSAFE_componentWillReceiveProps');
    switch(nextProps.func) {
      case 'created': {
        if(this.state.counter % 2 === 0) {
          this.setState({counter: this.state.counter + 1});
        }
        break;
      }
      case 'removed': {
        if(this.state.counter % 2 !== 0) {
          this.setState({counter: this.state.counter - 1});
        }
        break;
      }
      case 'reset': {
        this.setState({counter: nextProps.counter});
        break;
      }
      default: break;
    }
  }

  render() {
    console.log('Children: render');
    return <Counter 
              counter = {this.state.counter} 
              handleDecrease = {this.handleDecrease}
              handleIncrease = {this.handleIncrease}
              handleReset = {this.handleReset}
          />
  }
}
  
  export default CounterContainer;
  