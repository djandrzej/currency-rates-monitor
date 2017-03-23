import React from 'react';
import expect from 'expect';
import {render} from 'enzyme';
import configureStore from 'redux-mock-store';

import CurrencyMonitor from '../../src/containers/CurrencyMonitor';

const mockStore = configureStore([]);

let store;

const initialState = {
    allCurrencies: ['USD'],
    availableCurrencies: ['USD', 'PLN'],
    currenciesByCode: {
        USD: {
            code: 'USD',
            table: 'A'
        }
    },
    currencyRatesByCode: {
        USD: {
            isFetching: false,
            mid: 3
        }
    },
    form: {
        isFetching: false,
        selectedCurrency: null
    }
};

describe('CurrencyMonitor container', () => {
    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render as div with `currency-monitor` class', () => {
        const wrapper = render(<CurrencyMonitor store={store}/>);
        expect(wrapper.find('div.currency-monitor').length).toEqual(1);
    });

    it('should render CurrencyItemList component', () => {
        const wrapper = render(<CurrencyMonitor store={store}/>);
        expect(wrapper.find('div.currency-item-list').length).toEqual(1);
    });

    it('should render Form component', () => {
        const wrapper = render(<CurrencyMonitor store={store}/>);
        expect(wrapper.find('div.form').length).toEqual(1);
    });
});
