import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';

function reduxSuccess(props) {
    const {classes} = props;
    return (
        <div className={classes.successInfo}>
            <p>email:{props.user.email}</p>
            <p>password:{props.user.password}</p>
        </div>
    );
}

export default withStyles(styles)(reduxSuccess);