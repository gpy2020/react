import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../Login/style';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = 'password must be >6 symbols';
    }
    return errors
  }

  const renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <div>{error}</div>))}
        </div>
    </div>
);

function loginReduxForm(props) {
    const {handleSubmit, classes} = props;
    const submit = (values) => console.log(values);
    return (
        <div className={classes.loginDiv}>
            <form className={classes.loginForm} onSubmit={handleSubmit}>
                <label htmlFor='email'>EMAIL</label>
                <Field className={classes.loginInput} name='email' component={renderField} type='email' value={props.email} onChange={props.handleUserInput} />
                <label htmlFor='password'>PASSWORD</label>
                <Field className={classes.loginInput} name='password' component={renderField} type='password' value={props.password} onChange={props.handleUserInput} />
                <button className={classes.loginSubmit} type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

loginReduxForm = reduxForm({
    form: 'loginRedux',
    validate
})(loginReduxForm);

export default withStyles(styles)(loginReduxForm);