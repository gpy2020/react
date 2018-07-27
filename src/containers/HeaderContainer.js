import React, { Component } from 'react';
import Header from '../views/Header';

class HeaderContainer extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
        console.log(this.state);
    }

    handleChange = (event, value) => {
        this.setState({value});
        console.log(this.state.value);
    }

    render() {
        return <Header 
                    value={this.state.value}
                    handleChange={this.handleChange}
                />
    }
}
export default HeaderContainer;