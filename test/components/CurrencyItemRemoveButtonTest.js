import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow, render} from 'enzyme';

import CurrencyItemRemoveButton from '../../src/components/CurrencyItemRemoveButton';
import Button from '../../src/components/Button';

describe('CurrencyItemRemoveButton component', () => {
    it('renders Button component', () => {
        const wrapper = shallow(<CurrencyItemRemoveButton/>);
        expect(wrapper.find(Button).length).toEqual(1);
    });

    it('renders `X`', () => {
        const wrapper = render(<CurrencyItemRemoveButton/>);
        expect(wrapper.text()).toEqual('X');
    });

    it('has currency-item-remove-button class', () => {
        const wrapper = shallow(<CurrencyItemRemoveButton/>);
        expect(wrapper.find('.currency-item-remove-button').length).toEqual(1);
    });

    it('invokes a callback when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<CurrencyItemRemoveButton onClick={onClick}/>);
        wrapper.find(Button).simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
