import expect from 'expect';
import reducer from '../../src/reducers/form';

import {
    FETCH_AVAILABLE_CURRENCIES,
    FETCH_AVAILABLE_CURRENCIES_SUCCESS,
    FETCH_AVAILABLE_CURRENCIES_FAILURE,
    SELECT_CURRENCY,
    ADD_CURRENCY
} from '../../src/constants/actionTypes';

describe('Counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({
                isFetching: true,
                selectedCurrency: null
            });
    });

    it('should handle FETCH_AVAILABLE_CURRENCIES', () => {
        expect(
            reducer({
                isFetching: false
            }, {
                type: FETCH_AVAILABLE_CURRENCIES
            })
        ).toEqual({
            isFetching: true
        });
    });

    it('should handle FETCH_AVAILABLE_CURRENCIES_SUCCESS', () => {
        expect(
            reducer({
                isFetching: true
            }, {
                type: FETCH_AVAILABLE_CURRENCIES_SUCCESS
            })
        ).toEqual({
            isFetching: false
        });
    });

    it('should handle FETCH_AVAILABLE_CURRENCIES_FAILURE', () => {
        expect(
            reducer({
                isFetching: true
            }, {
                type: FETCH_AVAILABLE_CURRENCIES_FAILURE
            })
        ).toEqual({
            isFetching: false
        });
    });

    it('should handle SELECT_CURRENCY', () => {
        expect(
            reducer({
                selectedCurrency: null
            }, {
                type: SELECT_CURRENCY,
                payload: 'USD'
            })
        ).toEqual({
            selectedCurrency: 'USD'
        });
    });

    it('should handle ADD_CURRENCY', () => {
        expect(
            reducer({
                selectedCurrency: null
            }, {
                type: ADD_CURRENCY
            })
        ).toEqual({
            selectedCurrency: null
        });
    });
});
