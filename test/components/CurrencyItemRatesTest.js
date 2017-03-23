import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';

import CurrencyItemRates from '../../src/components/CurrencyItemRates';

const defaultProps = {
    mid: 2.1
};

describe('CurrencyItemRates component', () => {
    it('renders a span', () => {
        const wrapper = shallow(<CurrencyItemRates {...defaultProps}/>);
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('has currency-item-rates class', () => {
        const wrapper = shallow(<CurrencyItemRates {...defaultProps}/>);
        expect(wrapper.find('.currency-item-rates').length).toEqual(1);
    });

    it('renders passed mid prop', () => {
        const wrapper = shallow(<CurrencyItemRates {...defaultProps}/>);
        expect(wrapper.text()).toEqual('2.1');
    });
});
