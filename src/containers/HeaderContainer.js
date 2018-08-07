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
        switch (this.props.history.location.pathname) {
            case '/react/counters': {
                value = 1;
                break;
            }
            case '/react/about': {
                value = 0;
                break;
            }
            case '/react/login': {
                value = 2;
                break;
            }
            case '/react/login-redux/':
            case '/react/login-redux/success': {
                value = 3;
                break;
            }
            case '/react/login-redux-form/':
            case '/react/login-redux-form/success': {
                value = 4;
                break;
            }
            default: {
                value = null;
                break;
            }
        }

        this.setState({value: value});
    }

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
