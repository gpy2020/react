import { cloneDeep } from 'lodash';
import * as actionTypes from './ActionTypes';

const initialState = {
    user: {email: '', password: ''},
    email: '',
    password: '',
    formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_EMAIL: {
            console.log(`state emil changing: ${state.email}`);
            return {...cloneDeep(state), email: action.email};
        }
        case actionTypes.CHANGE_PASSWORD: {
            console.log(`state password changing: ${state.password}`);
            return {...cloneDeep(state), password: action.password};
        }
        case actionTypes.VALIDATE_EMAIL: {
            console.log(`state email valid: ${state.emailValid}`);
            return {...cloneDeep(state), emailValid: action.emailValid};
        }
        case actionTypes.VALIDATE_PASSWORD: {
            console.log(`state password valid: ${state.passwordValid}`);
            return {...cloneDeep(state), passwordValid: action.passwordValid};
        }
        case actionTypes.FORM_ERRORS: {
            console.log(`state formErrors:`);
            console.log(state.formErrors);
            return {...cloneDeep(state), formErrors: action.formErrors};
        }
        case actionTypes.VALIDATE_FORM: {
            console.log(`formValid: ${state.formValid}`);
            return {...cloneDeep(state), formValid: action.formValid};
        }
        case actionTypes.SAVE_USER: {
            return {...cloneDeep(state), user: action.user};
        }

        default: return state;
    }
}

export default loginReducer;