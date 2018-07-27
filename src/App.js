import React, { Component } from 'react';
// import CounterContainer from './containers/CounterContainer';
import HeaderContainer from './containers/HeaderContainer';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <MainContainer />
      </div>
      
    )
  }
}

export default App;
