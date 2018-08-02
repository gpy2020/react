import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { styles } from './style';

const FormErrors = (props) => {
    const {classes} = props;
    return (
    <div>
    {Object.keys(props.formErrors).map((fieldName, i) => {
        return props.formErrors[fieldName].length > 0 ? (
            <p key={i} className={classes.errorMessage} > {fieldName} {props.formErrors[fieldName]}</p>
        ) : '';
        }
    )}
    </div>
    )
}

export default withStyles(styles)(FormErrors);