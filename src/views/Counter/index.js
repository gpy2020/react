import React from 'react';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import {styles} from './style';


function counter(props) {
    const {classes} = props;
    return (
    <div>
        <h2 className={classes.header}>{props.counter}</h2>
        <div className={classes.buttons}>
            <Button color="secondary" variant="contained" onClick={props.handleDecrease}>-</Button>
            <Button variant="contained" onClick={props.handleReset}>Reset</Button>
            <Button color="primary" variant="contained" onClick={props.handleIncrease}>+</Button>
        </div>
    </div>
  );
}

counter.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDecrease: PropTypes.func.isRequired,
    handleIncrease: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
};

export default withStyles(styles)(counter);