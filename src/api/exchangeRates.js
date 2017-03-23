import Promise from 'bluebird';
import request from './utils/request';
import {valuesIn, flatten, uniqBy} from 'lodash';
import * as tableTypes from '../constants/tableTypes';
import Currency from './models/Currency';

export function getCurrencies(tableType) {
    return new Promise((resolve, reject) => {
        request('GET', `/exchangerates/tables/${tableType}/`)
            .end((err, res) => {
                if (err) {
                    return reject(err.toString());
                }
                return resolve(
                    res.body[0].rates.map(data => new Currency(data.code, tableType))
                );
            });
    });
}

export function getCurrencyRates(currency) {
    return new Promise((resolve, reject) => {
        request('GET', `/exchangerates/rates/${currency.table}/${currency.code}/`)
            .end((err, res) => {
                if (err) {
                    return reject(err.toString());
                }
                return resolve(
                    res.body.rates[0].mid
                );
            });
    });
}

export function getAllCurrencies() {
    return Promise.all(
        valuesIn(tableTypes)
            .map(getCurrencies)
    ).then(res => Promise.resolve(
        uniqBy(flatten(res), currency => currency.code)
    ));
}
