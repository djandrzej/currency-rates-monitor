import {
    FETCH_CURRENCY_RATES,
    FETCH_CURRENCY_RATES_FAILURE,
    FETCH_CURRENCY_RATES_SUCCESS,
    FETCH_AVAILABLE_CURRENCIES,
    FETCH_AVAILABLE_CURRENCIES_FAILURE,
    FETCH_AVAILABLE_CURRENCIES_SUCCESS
} from '../constants/actionTypes';

import {
    getAllCurrencies,
    getCurrencyRates
} from '../api/exchangeRates';

export function fetchCurrencyRates(currency) {
    return dispatch => {
        dispatch({
            type: FETCH_CURRENCY_RATES,
            currencyCode: currency.code
        });
        return getCurrencyRates(currency)
            .then(response => dispatch(fetchCurrencyRatesSuccess(currency, response)))
            .catch(error => dispatch(fetchCurrencyRatesFailure(currency, error)));
    };
}

export function fetchAvailableCurrencies() {
    return dispatch => {
        dispatch({
            type: FETCH_AVAILABLE_CURRENCIES
        });
        return getAllCurrencies()
            .then(response => dispatch(fetchAvailableCurrenciesSuccess(response)))
            .catch(error => dispatch(fetchAvailableCurrenciesFailure(error)));
    };
}

function fetchCurrencyRatesSuccess(currency, response) {
    return {
        type: FETCH_CURRENCY_RATES_SUCCESS,
        currencyCode: currency.code,
        payload: response
    };
}

function fetchCurrencyRatesFailure(currency, error) {
    return {
        type: FETCH_CURRENCY_RATES_FAILURE,
        currencyCode: currency.code,
        payload: error
    };
}

function fetchAvailableCurrenciesFailure(error) {
    return {
        type: FETCH_AVAILABLE_CURRENCIES_FAILURE,
        payload: error
    };
}

function fetchAvailableCurrenciesSuccess(response) {
    return {
        type: FETCH_AVAILABLE_CURRENCIES_SUCCESS,
        payload: response
    };
}
