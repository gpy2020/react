import React, { Component } from 'react';
import LoginReduxForm from '../views/LoginReduxForm';
import { connect } from 'react-redux';
import * as actionTypes from '../containers/reducers/actions';
import { Redirect, withRouter } from 'react-router-dom';

class LoginReduxFormContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            formErrors: {email: '', password: ''},
        }
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField = async (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email': {
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            }
            case 'password': {
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            }
        }
        await this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
          }, this.validateForm);
        console.log(`email: ${this.state.email} password: ${this.state.password}`)  
    }

    validateForm = async () => {
        await this.setState({formValid: this.state.emailValid && this.state.passwordValid});
        console.log(this.state.formValid);
    }

    handleSubmit = (values) => {
        this.props.onSaveUser(values);
        console.log(values);
        console.log(this.state.toSuccess);
        this.props.history.push('/react/login-redux-form/success')
    };

    render() {
        return <LoginReduxForm 
                    onSubmit={this.handleSubmit}
                    handleUserInput={this.handleUserInput}
                    email={this.state.email}
                    password={this.state.password}
                    emailValid={this.state.emailValid}
                    passwordValid={this.state.passwordValid}
                    formValid={this.state.formValid} 
                    formErrors={this.state.formErrors}/>
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