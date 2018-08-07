import React, { Component } from "react";
import ParentCounter from "../views/ParentCounter";

class ParentCounterContainer extends Component {
  constructor() {
    super();

    this.state = {
      counters: [{ index: 0 }],
      counter: 1,
      index: 1
    };
  }

  handleCreate = () => {
    for (let i = 0; i < this.state.counters.length; i++) {
      let newArray = this.state.counters;
      newArray[i] = { index: i, func: "created" };
      this.setState({ counters: newArray });
    }

    this.setState({
      counters: [...this.state.counters, { index: this.state.index }],
      counter: this.state.counter + 1,
      index: this.state.index + 1
    });
    console.log(this.state.counters);
  };

  handleRemove = () => {
    for (let i = 0; i < this.state.counters.length; i++) {
      let newArray = this.state.counters;
      newArray[i] = { index: i, func: "removed" };
      this.setState({ counters: newArray });
    }

    if (this.state.counters.length > 1) {
      this.setState({
        counters: this.state.counters.splice(0, this.state.counters.length - 1),
        counter: this.state.counter - 1,
        index: this.state.index - 1
      });
    }
  };

  handleReset = () => {
    this.setState({
      counters: [{ index: 0, counter: 0, func: "reset" }],
      counter: 1,
      index: 1
    });
  };

  componentDidMount() {
    console.log("Parent: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent: componentWillUnmount");
  }

  componentWillReceiveProps() {
    console.log("Parent: UNSAFE_componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("Parent: shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("Parent: render");
    return (
      <ParentCounter
        counter={this.state.counter}
        counters={this.state.counters}
        handleCreate={this.handleCreate}
        handleRemove={this.handleRemove}
        handleReset={this.handleReset}
      />
    );
  }
}

export default ParentCounterContainer;
