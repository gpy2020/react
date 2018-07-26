import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import ParentCounter from '../views/ParentCounter';

class ParentCounterContainer extends Component {
    constructor() {
        super();

        this.state = {
            counters: [<CounterContainer index={0}/>, ],
            counter: 1,
            index: 1,
        }
    }

    handleCreate = () => {
        for (let i = 0; i < this.state.counters.length; i++) {
            let newArray = this.state.counters;
            newArray[i] = <CounterContainer index={i} func={'created'}/>
            this.setState({counters: newArray});
        }

        this.setState({
            counters: [...this.state.counters, <CounterContainer index={this.state.index} />],
            counter: this.state.counter + 1,
            index: this.state.index + 1
        });
        console.log(this.state.counters);
    }

    handleRemove = () => {
        for (let i = 0; i < this.state.counters.length; i++) {
            let newArray = this.state.counters;
            newArray[i] = <CounterContainer index={i} func={'removed'}/>
            this.setState({counters: newArray});
        }

        if (this.state.counters.length > 1) {
            this.setState({
                counters: this.state.counters.splice(0, this.state.counters.length - 1),
                counter: this.state.counter - 1,
                index: this.state.index - 1
            });
        }
    }

    handleReset = () => {
        this.setState({
            counters: [<CounterContainer index={0} counter={0} func={'reset'}/>, ],
            counter: 1,
            index: 1,
        });
    }

    render() {
        return <ParentCounter 
                    counter={this.state.counter}
                    counters={this.state.counters}
                    handleCreate={this.handleCreate}
                    handleRemove={this.handleRemove}
                    handleReset={this.handleReset}
                    />
    }
}

export default ParentCounterContainer;