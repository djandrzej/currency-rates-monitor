import {
    FETCH_CURRENCY_RATES,
    FETCH_CURRENCY_RATES_SUCCESS,
    FETCH_CURRENCY_RATES_FAILURE,
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../constants/actionTypes';

const initialState = {};

export default function currencyRatesByCodeReducer(state = initialState, action) {
    const {currencyCode, payload} = action;
    switch (action.type) {
        case FETCH_CURRENCY_RATES:
            return {
                ...state,
                [currencyCode]: {
                    ...state[currencyCode],
                    isFetching: true
                }
            };
        case FETCH_CURRENCY_RATES_SUCCESS:
            return {
                ...state,
                [currencyCode]: {
                    ...state[currencyCode],
                    isFetching: false,
                    fetched: true,
                    mid: payload
                }
            };
        case FETCH_CURRENCY_RATES_FAILURE:
            return {
                ...state,
                [currencyCode]: {
                    ...state[currencyCode],
                    isFetching: false
                }
            };
        case ADD_CURRENCY:
            return {
                ...state,
                [payload]: {
                    isFetching: false,
                    fetched: false
                }
            };
        case REMOVE_CURRENCY:
            const newState = {...state};
            delete newState[currencyCode];
            return newState;
    }
    return {...state};
}
