import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { App } from './src/app';
import { store } from './src/redux/root.store';



ReactDOM.render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    document.getElementById('app')
)