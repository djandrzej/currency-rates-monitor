import {combineReducers} from 'redux';
import allCurrencies from './allCurrencies';
import availableCurrencies from './availableCurrencies';
import currenciesByCode from './currenciesByCode';
import currencyRatesByCode from './currencyRatesByCode';
import form from './form';

export default combineReducers({
    allCurrencies,
    availableCurrencies,
    currenciesByCode,
    currencyRatesByCode,
    form
});
