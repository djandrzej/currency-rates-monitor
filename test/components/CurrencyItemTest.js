import React from 'react';
import expect, {createSpy, spyOn} from 'expect';
import {shallow, mount} from 'enzyme';

import CurrencyItem from '../../src/components/CurrencyItem';
import CurrencyItemFetchingIndicator from '../../src/components/CurrencyItemFetchingIndicator';
import CurrencyItemCode from '../../src/components/CurrencyItemCode';
import CurrencyItemRates from '../../src/components/CurrencyItemRates';
import CurrencyItemRemoveButton from '../../src/components/CurrencyItemRemoveButton';

const defaultProps = {
    code: 'USD',
    onRemove: () => {},
    fetch: () => {}
};

describe('CurrencyItem component', () => {
    it('renders a div', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps}/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has currency-item class', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps}/>);
        expect(wrapper.find('.currency-item').length).toEqual(1);
    });

    it('renders CurrencyItemFetchingIndicator component if is fetching', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps} isFetching={true}/>);
        expect(wrapper.find(CurrencyItemFetchingIndicator).length).toEqual(1);
    });

    it('renders CurrencyItemFetchingIndicator component if fetched prop is false ', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps} fetched={false}/>);
        expect(wrapper.find(CurrencyItemFetchingIndicator).length).toEqual(1);
    });

    it('renders CurrencyItemCode component', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps}/>);
        expect(wrapper.find(CurrencyItemCode).length).toEqual(1);
    });

    it('renders CurrencyItemRates component', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps}/>);
        expect(wrapper.find(CurrencyItemRates).length).toEqual(1);
    });

    it('renders CurrencyItemRemoveButton component', () => {
        const wrapper = shallow(<CurrencyItem {...defaultProps}/>);
        expect(wrapper.find(CurrencyItemRemoveButton).length).toEqual(1);
    });

    it('should invoke onRemove callback with code as param if clicked the remove button', () => {
        const onClick = createSpy();
        const wrapper = shallow(<CurrencyItem {...defaultProps} onRemove={onClick}/>);
        wrapper.find(CurrencyItemRemoveButton).simulate('click');
        expect(onClick).toHaveBeenCalledWith('USD');
    });

    it('should call componentDidMount method', () => {
        const spy = spyOn(CurrencyItem.prototype, 'componentDidMount');
        const wrapper = mount(<CurrencyItem {...defaultProps}/>);
        expect(spy).toHaveBeenCalled();
    });

    it('should call componentWillUnmount method', () => {
        const spy = spyOn(CurrencyItem.prototype, 'componentWillUnmount');
        const wrapper = mount(<CurrencyItem {...defaultProps}/>);
        wrapper.unmount();
        expect(spy).toHaveBeenCalled();
    });
});
