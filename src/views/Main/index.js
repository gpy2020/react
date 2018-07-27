import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ParentCounterContainer from '../../containers/ParentCounter';
import AboutContainer from '../../containers/AboutContainer';
import HomeContainer from '../../containers/HomeContainer';
import ErrorContainer from '../../containers/ErrorContainer';

function main() {
    return (
        <Switch>
            <Route exact path='/counters' component={ParentCounterContainer}/>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/' component={HomeContainer}/>
            <Route component={ErrorContainer} />
        </Switch>    
    )
}

export default main;