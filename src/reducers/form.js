import {
    FETCH_AVAILABLE_CURRENCIES,
    FETCH_AVAILABLE_CURRENCIES_SUCCESS,
    FETCH_AVAILABLE_CURRENCIES_FAILURE,
    SELECT_CURRENCY,
    ADD_CURRENCY
} from '../constants/actionTypes';

const initialState = {
    isFetching: true,
    selectedCurrency: null
};

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_AVAILABLE_CURRENCIES:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_AVAILABLE_CURRENCIES_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case FETCH_AVAILABLE_CURRENCIES_FAILURE:
            return {
                ...state,
                isFetching: false
            };
        case SELECT_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.payload
            };
        case ADD_CURRENCY:
            return {
                ...state,
                selectedCurrency: null
            };
    }
    return {...state};
}
