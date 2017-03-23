import {
    FETCH_AVAILABLE_CURRENCIES_SUCCESS
} from '../constants/actionTypes';

const initialState = {};

export default function currenciesByCodeReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case FETCH_AVAILABLE_CURRENCIES_SUCCESS:
            return payload.reduce((prev, cur) => ({
                ...prev,
                [cur.code]: {...cur}
            }), {});
    }
    return {...state};
}
