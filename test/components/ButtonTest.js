import React from 'react';
import expect, {createSpy} from 'expect';
import {shallow} from 'enzyme';

import Button from '../../src/components/Button';

describe('Button component', () => {
    it('renders a div', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('has button class', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper.find('.button').length).toEqual(1);
    });

    it('receives button-disabled class if button is disabled', () => {
        const wrapper = shallow(<Button disabled={true}/>);
        expect(wrapper.find('.button.button-disabled').length).toEqual(1);
    });

    it('renders text passed as children', () => {
        const wrapper = shallow(<Button>ButtonABC</Button>);
        expect(wrapper.text()).toEqual('ButtonABC');
    });

    it('invokes a callback when clicked', () => {
        const onClick = createSpy();
        const wrapper = shallow(<Button onClick={onClick}/>);
        wrapper.find('div.button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });

    it('does not invoke a callback when clicked while disabled', () => {
        const onClick = createSpy();
        const wrapper = shallow(<Button onClick={onClick} disabled={true}/>);
        wrapper.find('div.button').simulate('click');
        expect(onClick).toNotHaveBeenCalled();
    });
});
