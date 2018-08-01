import React from 'react';
import FormErrors from '../FormErrors';
import { withStyles } from '@material-ui/core/styles';
import {styles} from '../Login/style'

function loginRedux(props) {
    const {classes} = props;
    return (
        <div className={classes.loginDiv}>
            <form className={classes.loginForm} onSubmit={props.handleSubmit}>
                <div>
                    <FormErrors formErrors={props.formErrors}/>
                </div>
                <label htmlFor="email">Email</label>
                <input className={classes.loginInput} type="email" name="email" value={props.email} onChange={props.handleUserInput}/>
                <label htmlFor="password">Password</label>
                <input className={classes.loginInput} type="password" name="password" value={props.password} onChange={props.handleUserInput}/>
                <button className={classes.loginSubmit} type="submit" disabled={!props.formValid} >SUBMIT</button>
            </form>
        </div>    
    )
}

export default withStyles(styles)(loginRedux);