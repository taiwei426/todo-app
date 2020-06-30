import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from'redux'
import reduxThunk from 'redux-thunk';

import App from './components/App'
import reducer from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // dev tool to see the store

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>,
    document.querySelector('#root')
)