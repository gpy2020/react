import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './style'
import FormErrors from '../FormErrors';

function login(props) {
   const {classes} = props;
    return (
        <div className={classes.loginDiv}>
            <form className={classes.loginForm} onSubmit={props.handleSubmit}>
                <div>
                    <FormErrors formErrors={props.formErrors}/>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={props.email} className={classes.loginInput} onChange={props.handleUserInput}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={props.password} className={classes.loginInput} onChange={props.handleUserInput}/>
                <button type="submit" className={classes.loginSubmit} disabled={!props.formValid} >SUBMIT</button>
            </form>
            <p>Email: {props.email}</p>
            <p>Password: {props.password}</p>
            <p>{props.user.email && props.user.password !== '' ? JSON.stringify(props.user, null, 4) : ''}</p>
        </div>    
    )
}

export default withStyles(styles)(login);