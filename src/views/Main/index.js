import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import ParentCounterContainer from '../../containers/ParentCounter';
import AboutContainer from '../../containers/AboutContainer';
import HomeContainer from '../../containers/HomeContainer';
import ErrorContainer from '../../containers/ErrorContainer';
import HeaderContainer from '../../containers/HeaderContainer';

function withRoot(Component) {
    return function Wrapper() {
        return ( <HeaderContainer> <Component/> </HeaderContainer> );
    }
}

function main() {
    return (
        <Switch>
            <Route exact path='/counters' component={withRoot(ParentCounterContainer)}/>
            <Route exact path='/about' component={withRoot(AboutContainer)} />
            <Route exact path='/' component={withRoot(HomeContainer)}/>
            <Route component={ErrorContainer} />
        </Switch>
    )
}
export default withRouter(main);
