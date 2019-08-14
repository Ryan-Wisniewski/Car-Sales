import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {reducers} from './reducers'

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
//create de store -check
export const store = createStore(reducers)

console.log('store',store)

const rootElement = document.getElementById('root');
//wrap in wrapper and give store -check
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
    )
