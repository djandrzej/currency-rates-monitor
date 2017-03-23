import expect from 'expect';
import reducer from '../../src/reducers/allCurrencies';

import {
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../../src/constants/actionTypes';

describe('allCurrencies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual([]);
    });

    it('should handle ADD_CURRENCY', () => {
        expect(
            reducer([], {
                type: ADD_CURRENCY,
                payload: 'USD'
            })
        ).toEqual(['USD']);
    });

    it('should handle REMOVE_CURRENCY', () => {
        expect(
            reducer(['PLN', 'USD'], {
                type: REMOVE_CURRENCY,
                payload: 'PLN'
            })
        ).toEqual(['USD']);
    });
});
