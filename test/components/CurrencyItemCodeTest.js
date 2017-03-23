import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import CurrencyItemCode from '../../src/components/CurrencyItemCode';

const defaultProps = {
    code: 'USD'
};

describe('CurrencyItemCode component', () => {
    it('renders a span', () => {
        const wrapper = shallow(<CurrencyItemCode {...defaultProps}/>);
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('has currency-item-code class', () => {
        const wrapper = shallow(<CurrencyItemCode {...defaultProps}/>);
        expect(wrapper.find('.currency-item-code').length).toEqual(1);
    });

    it('renders passed code', () => {
        const wrapper = shallow(<CurrencyItemCode {...defaultProps}/>);
        expect(wrapper.text()).toEqual('USD');
    });
});
