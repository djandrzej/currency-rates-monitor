import expect from 'expect';

import * as actions from '../../src/actions';

import {
    SELECT_CURRENCY,
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../../src/constants/actionTypes';

describe('Form action creators', () => {
    describe('selectCurrency', () => {
        it('should create an action to select currency', () => {
            expect(actions.selectCurrency('USD'))
                .toEqual({
                    type: SELECT_CURRENCY,
                    payload: 'USD'
                });
        });
    });

    describe('addCurrency', () => {
        it('should create an action to add currency', () => {
            expect(actions.addCurrency('USD'))
                .toEqual({
                    type: ADD_CURRENCY,
                    payload: 'USD'
                });
        });
    });

    describe('removeCurrency', () => {
        it('should create an action to remove currency', () => {
            expect(actions.removeCurrency('USD'))
                .toEqual({
                    type: REMOVE_CURRENCY,
                    payload: 'USD'
                });
        });
    });
});
