import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginRedux from '../views/LoginRedux';
import { Redirect } from 'react-router-dom';
import * as actions from './reducers/Actions';

class LoginReduxContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toSuccess: false
        }
    }

    handleUserInput = async (event) => {
        const name = event.target.name;
        const value = event.target.value;
        await this.props.onInputChanged(name, value);
        this.validateField(name, value)
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let emailValid = this.props.emailValid;
        let passwordValid = this.props.passwordValid;

        switch(fieldName) {
            case 'email': {
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                this.props.onValidateEmail(emailValid);
                break;
            }
            case 'password': {
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                this.props.onValidatePassword(passwordValid);
                break;
            }
        }
        this.props.onFormErrors(fieldValidationErrors);
        this.props.onValidateForm(this.props.emailValid && this.props.passwordValid);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveUser({email: this.props.email, password: this.props.password});
        this.setState({toSuccess: true});
        console.log(`to success: ${this.state.toSuccess}`);
    }

    render() {
        if (this.state.toSuccess) {
             return <Redirect to='/react/login-redux/success'/>
        }
        return <LoginRedux 
                    email={this.props.email}
                    password={this.props.password}
                    emailValid={this.props.emailValid}
                    passwordValid={this.props.passwordValid}
                    formValid={this.props.formValid}
                    handleUserInput={this.handleUserInput}
                    handleSubmit={this.handleSubmit} 
                    formErrors={this.props.formErrors}/>
    }

}

const mapStateToProps = state => {
    return {
        email: state.login.email,
        password: state.login.password,
        emailValid: state.login.emailValid,
        passwordValid: state.login.passwordValid,
        formValid: state.login.formValid,
        formErrors: state.login.formErrors,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChanged: (name, value) => {
            switch(name) {
                case 'email': {
                    dispatch(actions.changeEmail(value));
                    break;
                }
                case 'password': {
                    dispatch(actions.changePassword(value));
                    break;
                }
            }
        },
        onValidateEmail: (value) => {
            dispatch(actions.validateEmail(value));
        },
        onValidatePassword: (value) => {
            dispatch(actions.validatePassword(value));
        },
        onFormErrors: (formErrors) => {
            dispatch(actions.setFormErrors(formErrors));
        },
        onValidateForm: (value) => {
            dispatch(actions.validateForm(value));
        },
        onSaveUser: (value) => {
            dispatch(actions.saveUser(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);