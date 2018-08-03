import * as actionTypes from './ActionTypes'

export function changeEmail(email) {
    return {type: actionTypes.CHANGE_EMAIL, email: email};
}

export function changePassword(password) {
    return {type: actionTypes.CHANGE_PASSWORD, password: password};
}

export function validateEmail(emailValid) {
    return {type: actionTypes.VALIDATE_EMAIL, emailValid: emailValid};
}

export function validatePassword(passwordValid) {
    return {type: actionTypes.VALIDATE_PASSWORD, passwordValid: passwordValid};
}

export function setFormErrors(formErrors) {
    return {type: actionTypes.FORM_ERRORS, formErrors: formErrors};
}

export function validateForm(formValid) {
    return {type: actionTypes.VALIDATE_FORM, formValid: formValid};
}

export function saveUser(user) {
    return {type: actionTypes.SAVE_USER, user: user}
}