import React, { Component } from 'react';
import Login from '../views/Login';

class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            user: {email: '', password: ''},
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        this.validateField(name, value);
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email': {
                emailValid = !!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            }
            case 'password': {
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            }
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
          });
        this.validateForm(emailValid, passwordValid);
    }

    validateForm = (emailValid, passwordValid) => {
        this.setState({formValid: emailValid && passwordValid});
        console.log(this.state.formValid);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
        await this.setState({
            user:{email: this.state.email, password: this.state.password},
            email: '', 
            password: '', 
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        });
        console.log(this.state.user);
    }

    render() {
        return <Login 
                    email={this.state.email}
                    password={this.state.password}
                    handleUserInput={this.handleUserInput}
                    formErrors={this.state.formErrors}
                    formValid={this.state.formValid}
                    handleSubmit={this.handleSubmit}
                    user={this.state.user}
                />
    }
}

export default LoginContainer;