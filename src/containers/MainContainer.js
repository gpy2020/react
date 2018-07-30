import React, { Component } from 'react';
import Main from '../views/Main';
import { withRouter } from 'react-router-dom';

class MainContainer extends Component {
    render() {
        return <Main/>
    }
}

export default withRouter(MainContainer);