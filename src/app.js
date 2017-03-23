import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import reduxStore from './store';

import CurrencyMonitor from './containers/CurrencyMonitor';

import './styles/main.less';

export default class App extends Component {

    render() {
        return <CurrencyMonitor/>;
    }

}

render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
