import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';

function error(props) {
    const {classes} = props;
    return (
        <h1 className={classes.errorMessage}>404: PAGE NOT FOUND</h1>
    )
}

export default withStyles(styles)(error);
