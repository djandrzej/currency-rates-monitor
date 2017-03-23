import expect from 'expect';
import {createStore} from 'redux';
import reducer from '../../src/reducers/index';
import allCurrencies from '../../src/reducers/allCurrencies';
import availableCurrencies from '../../src/reducers/availableCurrencies';
import currenciesByCode from '../../src/reducers/currenciesByCode';
import currencyRatesByCode from '../../src/reducers/currencyRatesByCode';
import form from '../../src/reducers/form';

describe('root reducer', () => {
    let store = createStore(reducer);

    it('should contain allCurrencies reducer', () => {
        expect(store.getState().allCurrencies)
            .toEqual(allCurrencies(undefined, {}));
    });

    it('should contain availableCurrencies reducer', () => {
        expect(store.getState().availableCurrencies)
            .toEqual(availableCurrencies(undefined, {}));
    });

    it('should contain currenciesByCode reducer', () => {
        expect(store.getState().currenciesByCode)
            .toEqual(currenciesByCode(undefined, {}));
    });

    it('should contain currencyRatesByCode reducer', () => {
        expect(store.getState().currencyRatesByCode)
            .toEqual(currencyRatesByCode(undefined, {}));
    });

    it('should contain form reducer', () => {
        expect(store.getState().form)
            .toEqual(form(undefined, {}));
    });
});
