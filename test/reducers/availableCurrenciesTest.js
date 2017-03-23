import expect from 'expect';
import reducer from '../../src/reducers/availableCurrencies';

import {
    FETCH_AVAILABLE_CURRENCIES_SUCCESS
} from '../../src/constants/actionTypes';

describe('availableCurrencies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {}))
            .toEqual([]);
    });

    it('should handle FETCH_AVAILABLE_CURRENCIES_SUCCESS', () => {
        const examplePayload = [
            {code: 'PLN'}, {code: 'USD'}
        ];
        expect(
            reducer([], {
                type: FETCH_AVAILABLE_CURRENCIES_SUCCESS,
                payload: examplePayload
            })
        ).toEqual(['PLN', 'USD']);
    });
});
