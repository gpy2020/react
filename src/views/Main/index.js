import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import ParentCounterContainer from '../../containers/ParentCounterContainer';
import AboutContainer from '../../containers/AboutContainer';
import HomeContainer from '../../containers/HomeContainer';
import ErrorContainer from '../../containers/ErrorContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import LoginContainer from '../../containers/LoginContainer';
import LoginReduxContainer from '../../containers/LoginReduxContainer';
import ReduxSuccessContainer from '../../containers/ReduxSuccessContainer';

function withRoot(Component) { 
    return class includeHeaderComponent extends React.Component { 
        render() { 
            return ( <HeaderContainer> <Component/> </HeaderContainer> ); 
        } 
    }; 
}

function main() {
    return (
        <Switch>
            <Route exact path='/react/counters' component={withRoot(ParentCounterContainer)}/>
            <Route exact path='/react/about' component={withRoot(AboutContainer)} />
            <Route exact path='/react/' component={withRoot(HomeContainer)} />
            <Route exact path='/react/login-redux' component={withRoot(LoginReduxContainer)} />
            <Route exact path='/react/login' component={withRoot(LoginContainer)} />
            <Route exact path='/react/login-redux/success' component={withRoot(ReduxSuccessContainer)}/>
            <Route component={ErrorContainer} />
        </Switch>
    )
}
export default withRouter(main);
