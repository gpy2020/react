import React from 'react';
import Button from '@material-ui/core/Button';

function parentCounter(props) {
    return (
        <div>
            <div>
                <h1>{props.counter}</h1>
                <div>
                    <Button color="secondary" variant="contained" onClick={props.handleRemove}>Remove</Button>
                    <Button variant="contained" onClick={props.handleReset}>Reset</Button>
                    <Button color="primary" variant="contained" onClick={props.handleCreate}>Add</Button>
                </div>
            </div>  
            <hr />  
            <div>
                {props.counters.map(counter => <div key={counter.props.index}>{counter}</div>)}
            </div>  
        </div> 
    )
}

export default parentCounter;