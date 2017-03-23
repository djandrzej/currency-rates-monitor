import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import CurrencyItemFetchingIndicator from '../../src/components/CurrencyItemFetchingIndicator';

describe('CurrencyItemFetchingIndicator component', () => {
    it('renders a span', () => {
        const wrapper = shallow(<CurrencyItemFetchingIndicator/>);
        expect(wrapper.find('span').length).toEqual(1);
    });

    it('has currency-item-fetching-indicator class', () => {
        const wrapper = shallow(<CurrencyItemFetchingIndicator/>);
        expect(wrapper.find('.currency-item-fetching-indicator').length).toEqual(1);
    });

    it('renders `f`', () => {
        const wrapper = shallow(<CurrencyItemFetchingIndicator/>);
        expect(wrapper.text()).toEqual('f');
    });

    it('renders `p` if first use', () => {
        const wrapper = shallow(<CurrencyItemFetchingIndicator firstUse={true}/>);
        expect(wrapper.text()).toEqual('p');
    });
});
