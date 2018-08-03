import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import loginReducer from './containers/reducers/LoginReducer';

const rootReducer = combineReducers({
    login: loginReducer,
})

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
, document.getElementById('root'));
registerServiceWorker();
