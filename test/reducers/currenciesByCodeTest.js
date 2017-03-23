import expect from 'expect';
import reducer from '../../src/reducers/currenciesByCode';

import {
    FETCH_AVAILABLE_CURRENCIES_SUCCESS
} from '../../src/constants/actionTypes';

describe('Counter reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual({});
    });

    it('should handle FETCH_AVAILABLE_CURRENCIES_SUCCESS', () => {
        expect(
            reducer(0, {
                type: FETCH_AVAILABLE_CURRENCIES_SUCCESS,
                payload: [{code: 'PLN', table: 'A'}, {code: 'ENG', table: 'B'}]
            })
        ).toEqual({
            PLN: {
                code: 'PLN',
                table: 'A'
            },
            ENG: {
                code: 'ENG',
                table: 'B'
            }
        });
    });
});
