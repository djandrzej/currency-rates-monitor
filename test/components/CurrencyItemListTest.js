import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import CurrencyItemList from '../../src/components/CurrencyItemList';
import CurrencyItem from '../../src/components/CurrencyItem';

const defaultProps = {
    allCurrencies: ['USD', 'PLN'],
    currenciesByCode: {},
    currencyRatesByCode: {},
    fetchCurrencyRates: () => {},
    removeCurrency: () => {}
};

describe('CurrencyItemList component', () => {
    it('renders a div', () => {
        const wrapper = shallow(<CurrencyItemList {...defaultProps}/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has currency-item-list class', () => {
        const wrapper = shallow(<CurrencyItemList {...defaultProps}/>);
        expect(wrapper.find('.currency-item-list').length).toEqual(1);
    });

    it('renders CurrencyItem component for each currency in list', () => {
        const wrapper = shallow(<CurrencyItemList {...defaultProps}/>);
        expect(wrapper.find(CurrencyItem).length).toEqual(2);
    });
});
