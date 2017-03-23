import {
    ADD_CURRENCY,
    REMOVE_CURRENCY
} from '../constants/actionTypes';

const initialState = [];

export default function allCurrenciesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CURRENCY:
            return [...state, action.payload];
        case REMOVE_CURRENCY:
            return state.filter(code => code !== action.payload);
    }
    return [...state];
}
