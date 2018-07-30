import React, { Component } from 'react';
import Header from '../views/Header';
import {withRouter} from 'react-router-dom';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        }
    }

    componentWillMount() {
        let value;
        console.log(this.props);
        // console.log(this.props.history.location.path);
        switch (this.props.history.location.pathname) {
            case '/counters': {
                value = 1;
                break;
            }
            case '/about': {
                value = 0;
                break;
            }
            default: {
                value = null;
                break;
            }
        }

        this.setState({value: value});
    }
    // handleChange = (event, value) => {
    //     console.log(this.props);
    //     this.setState({value});
    //     console.log(`click suka${this.state.value}`);
    // }

    render() {
        return (
        <React.Fragment>
            <Header 
                value={this.state.value}
                handleChange={this.handleChange}/>
            {this.props.children}
        </React.Fragment>)
    }
}
export default withRouter(HeaderContainer);