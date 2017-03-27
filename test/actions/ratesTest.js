import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../src/actions';
import * as tableTypes from '../../src/constants/tableTypes';
import {valuesIn} from 'lodash';
import config from '../../src/config';

import {
    FETCH_AVAILABLE_CURRENCIES,
    FETCH_AVAILABLE_CURRENCIES_FAILURE,
    FETCH_AVAILABLE_CURRENCIES_SUCCESS,
    FETCH_CURRENCY_RATES,
    FETCH_CURRENCY_RATES_FAILURE,
    FETCH_CURRENCY_RATES_SUCCESS
} from '../../src/constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const OK_STATUS_CODE = 200;
const SERVER_ERROR_STATUS_CODE = 500;

describe('Currency rates action creators', () => {
    describe('fetchAvailableCurrencies', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should dispatch FETCH_AVAILABLE_CURRENCIES ' +
            'and then FETCH_AVAILABLE_CURRENCIES_FAILURE when fetching failed', () => {
            valuesIn(tableTypes).forEach(tableType => {
                nock(config.apiUrl)
                    .get(`/exchangerates/tables/${tableType}/`)
                    .reply(SERVER_ERROR_STATUS_CODE);
            });

            const expectedActions = [{
                type: FETCH_AVAILABLE_CURRENCIES
            }, {
                type: FETCH_AVAILABLE_CURRENCIES_FAILURE,
                payload: 'Error: Internal Server Error',
            }];

            const store = mockStore();

            return store.dispatch(actions.fetchAvailableCurrencies())
                .then(() => expect(store.getActions()).toEqual(expectedActions));
        });

        it('should dispatch FETCH_AVAILABLE_CURRENCIES ' +
            'and then FETCH_AVAILABLE_CURRENCIES_SUCCESS when fetching succeed', () => {
            const exampleResponse = [{
                table: 'A',
                no: '057/A/NBP/2017',
                effectiveDate: '2017-03-22',
                rates: [{
                    currency: 'dolar amerykański',
                    code: 'USD',
                    mid: 3.9731
                }, {currency: 'dolar australijski', code: 'AUD', mid: 3.0440}, {
                    currency: 'dolar Hongkongu',
                    code: 'HKD',
                    mid: 0.5116
                }]
            }];

            valuesIn(tableTypes).forEach(tableType => {
                nock(config.apiUrl)
                    .get(`/exchangerates/tables/${tableType}/`)
                    .reply(OK_STATUS_CODE, exampleResponse);
            });

            const expectedActions = [{
                type: FETCH_AVAILABLE_CURRENCIES
            }, {
                type: FETCH_AVAILABLE_CURRENCIES_SUCCESS,
                payload: [
                    {
                        code: 'USD',
                        table: 'A'
                    },
                    {
                        code: 'AUD',
                        table: 'A'
                    },
                    {
                        code: 'HKD',
                        table: 'A'
                    }
                ],
            }];

            const store = mockStore();

            return store.dispatch(actions.fetchAvailableCurrencies())
                .then(() => expect(store.getActions()).toMatch(expectedActions));
        });
    });

    describe('fetchCurrencyRates', () => {
        afterEach(() => {
            nock.cleanAll();
        });

        it('should dispatch FETCH_CURRENCY_RATES ' +
            'and then FETCH_CURRENCY_RATES_FAILURE when fetching failed', () => {
            const exampleCurrency = 'USD';
            const exampleTableType = 'A';
            nock(config.apiUrl)
                .get(`/exchangerates/rates/${exampleTableType}/${exampleCurrency}/`)
                .reply(SERVER_ERROR_STATUS_CODE);

            const expectedActions = [{
                type: FETCH_CURRENCY_RATES,
                currencyCode: exampleCurrency
            }, {
                type: FETCH_CURRENCY_RATES_FAILURE,
                currencyCode: exampleCurrency,
                payload: 'Error: Internal Server Error',
            }];

            const store = mockStore();

            return store.dispatch(actions.fetchCurrencyRates({code: exampleCurrency, table: exampleTableType}))
                .then(() => expect(store.getActions()).toEqual(expectedActions));
        });

        it('should dispatch FETCH_CURRENCY_RATES ' +
            'and then FETCH_CURRENCY_RATES_SUCCESS when fetching succeed', () => {
            const exampleResponse = {
                table: 'A',
                currency: 'dolar amerykański',
                code: 'USD',
                rates: [{no: '057/A/NBP/2017', effectiveDate: '2017-03-22', mid: 3.9731}]
            };
            const exampleCurrency = 'USD';
            const exampleTableType = 'A';
            nock(config.apiUrl)
                .get(`/exchangerates/rates/${exampleTableType}/${exampleCurrency}/`)
                .reply(OK_STATUS_CODE, exampleResponse);

            const expectedActions = [{
                type: FETCH_CURRENCY_RATES,
                currencyCode: exampleCurrency
            }, {
                type: FETCH_CURRENCY_RATES_SUCCESS,
                currencyCode: exampleCurrency,
                payload: 3.9731,
            }];

            const store = mockStore();

            return store.dispatch(actions.fetchCurrencyRates({code: exampleCurrency, table: exampleTableType}))
                .then(() => expect(store.getActions()).toMatch(expectedActions));
        });
    });
});
