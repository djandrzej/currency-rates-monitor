import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow, render, mount} from 'enzyme';

import Form from '../../src/components/Form';
import Button from '../../src/components/Button';

const defaultProps = {
    isFetching: false,
    availableCurrencies: ['USD', 'PLN'],
    onChange: () => {},
    onAdd: () => {}
};

describe('Form component', () => {
    it('renders a div with `form` class', () => {
        const wrapper = shallow(<Form {...defaultProps}/>);
        expect(wrapper.find('div.form').length).toEqual(1);
    });

    it('should render `Please wait...` if is fetching', () => {
        const wrapper = shallow(<Form {...defaultProps} isFetching={true}/>);
        expect(wrapper.text()).toEqual('Please wait...');
    });

    it('should render div with class .form-content if is not fetching', () => {
        const wrapper = shallow(<Form {...defaultProps} isFetching={false}/>);
        expect(wrapper.find('div.form-content').length).toEqual(1);
    });

    it('should render a select with form-select class', () => {
        const wrapper = shallow(<Form {...defaultProps}/>);
        expect(wrapper.find('select.form-select').length).toEqual(1);
    });

    it('should render select option for each available currency and a placeholder', () => {
        const wrapper = shallow(<Form {...defaultProps}/>);
        expect(wrapper.find('option').length).toEqual(3);
    });

    it('should have proper currency selected', () => {
        const wrapper = render(<Form {...defaultProps} selectedCurrency={'PLN'}/>);
        expect(wrapper.find('select.form-select').val()).toEqual('PLN');
    });

    it('should invoke onChange callback when selected currency', () => {
        const onClick = createSpy();
        const wrapper = mount(<Form {...defaultProps} onChange={onClick}/>);
        wrapper.find('select.form-select').simulate('change');
        expect(onClick).toHaveBeenCalled();
    });

    it('should invoke onAdd callback when clicked `Add currency` button', () => {
        const onClick = createSpy();
        const wrapper = shallow(<Form {...defaultProps} onAdd={onClick}/>);
        wrapper.find(Button).simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});
