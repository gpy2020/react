import React, { Component } from 'react';
import LoginReduxForm from '../views/LoginReduxForm';
import { connect } from 'react-redux';
import * as actionTypes from '../containers/reducers/actions';
import { Redirect, withRouter } from 'react-router-dom';

class LoginReduxFormContainer extends Component {

    handleSubmit = (values) => {
        this.props.onSaveUser(values);
        console.log(values);
        this.props.history.push('/react/login-redux-form/success')
    };

    render() {
        return <LoginReduxForm 
                    onSubmit={this.handleSubmit}
                    />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveUser: (user) => {
            dispatch({type: actionTypes.SAVE_USER, user: user});
        },
    }
}



export default withRouter(connect(null, mapDispatchToProps)(LoginReduxFormContainer));