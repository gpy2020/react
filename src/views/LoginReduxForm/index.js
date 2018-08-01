import React from 'react';
import FormErrors from '../FormErrors';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../Login/style';
import { Field, reduxForm } from 'redux-form';

function loginReduxForm(props) {
    const {handleSubmit, classes} = props;
    const submit = (values) => console.log(values);
    return (
        <div className={classes.loginDiv}>
            <form className={classes.loginForm} onSubmit={handleSubmit}>
                <div>
                    <FormErrors formErrors={props.formErrors}/>
                </div>
                <label htmlFor='email'>EMAIL</label>
                <Field className={classes.loginInput} name='email' component='input' type='email' value={props.email} onChange={props.handleUserInput} />
                <label htmlFor='password'>PASSWORD</label>
                <Field className={classes.loginInput} name='password' component='input' type='password' value={props.password} onChange={props.handleUserInput} />
                <button className={classes.loginSubmit} type='submit' disabled={!props.formValid} >SUBMIT</button>
            </form>
        </div>
    )
}

loginReduxForm = reduxForm({
    form: 'loginRedux',
})(loginReduxForm);

export default withStyles(styles)(loginReduxForm);