import {
    FETCH_AVAILABLE_CURRENCIES_SUCCESS
} from '../constants/actionTypes';

const initialState = [];

export default function availableCurrenciesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_AVAILABLE_CURRENCIES_SUCCESS:
            return [...action.payload.map(currency => currency.code)];
    }
    return [...state];
}
