import expect from 'expect';
import reducer from '../../src/reducers/currencyRatesByCode';

import {
    FETCH_CURRENCY_RATES,
    FETCH_CURRENCY_RATES_SUCCESS,
    FETCH_CURRENCY_RATES_FAILURE,
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../../src/constants/actionTypes';

describe('currencyRatesByCode reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({});
    });

    it('should handle FETCH_CURRENCY_RATES', () => {
        expect(
            reducer({
                USD: {
                    isFetching: false
                }
            }, {
                type: FETCH_CURRENCY_RATES,
                currencyCode: 'USD'
            })
        ).toEqual({
            USD: {
                isFetching: true
            }
        });
    });

    it('should handle FETCH_CURRENCY_RATES_SUCCESS', () => {
        expect(
            reducer({
                USD: {
                    isFetching: true,
                    fetched: false
                }
            }, {
                type: FETCH_CURRENCY_RATES_SUCCESS,
                currencyCode: 'USD',
                payload: 3
            })
        ).toEqual({
            USD: {
                isFetching: false,
                fetched: true,
                mid: 3
            }
        });
    });

    it('should handle FETCH_CURRENCY_RATES_FAILURE', () => {
        expect(
            reducer({
                USD: {
                    isFetching: true
                }
            }, {
                type: FETCH_CURRENCY_RATES_FAILURE,
                currencyCode: 'USD'
            })
        ).toEqual({
            USD: {
                isFetching: false
            }
        });
    });

    it('should handle ADD_CURRENCY', () => {
        expect(
            reducer({}, {
                type: ADD_CURRENCY,
                payload: 'USD'
            })
        ).toEqual({
            USD: {
                fetched: false,
                isFetching: false
            }
        });
    });

    it('should handle REMOVE_CURRENCY', () => {
        expect(
            reducer({
                USD: {
                    mid: 1
                },
                PLN: {
                    mid: 2
                }
            }, {
                type: REMOVE_CURRENCY,
                currencyCode: 'USD'
            })
        ).toEqual({
            PLN: {
                mid: 2
            }
        });
    });
});
