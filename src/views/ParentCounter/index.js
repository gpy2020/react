import React from 'react';
import Button from '@material-ui/core/Button';
import {styles} from './style';
import { withStyles } from '@material-ui/core/styles';
import CounterContainer from '../../containers/CounterContainer';

function parentCounter(props) {
    const {classes} = props;
    return (
        <div>
            <h1 className={classes.counter}>{props.counter}</h1>
            <div className={classes.buttons}>
                <div>
                    <Button color="secondary" variant="contained" onClick={props.handleRemove}>Remove</Button>
                    <Button variant="contained" onClick={props.handleReset}>Reset</Button>
                    <Button color="primary" variant="contained" onClick={props.handleCreate}>Add</Button>
                </div>
            </div>  
            <hr />  
            <div>
                {props.counters.map(counter => <div key={counter.index}><CounterContainer counter={counter.counter} func={counter.func} /></div>)}
            </div>  
        </div> 
    )
}

export default withStyles(styles)(parentCounter);