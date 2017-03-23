import {
    SELECT_CURRENCY,
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../constants/actionTypes';

export function selectCurrency(currency) {
    return {
        type: SELECT_CURRENCY,
        payload: currency
    };
}

export function addCurrency(currency) {
    return {
        type: ADD_CURRENCY,
        payload: currency
    };
}

export function removeCurrency(currency) {
    return {
        type: REMOVE_CURRENCY,
        payload: currency
    };
}
