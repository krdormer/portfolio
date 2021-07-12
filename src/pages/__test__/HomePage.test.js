import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../home-page/home-page.component';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<HomePage />);
})

it('contains an h1 with class intro-title', () => {
    expect(wrapper.find('h1').hasClass('intro-title')).toEqual(true);
});

it('contains 2 p tags with class intro-text', () => {
    expect(wrapper.find('.intro-detail').length).toEqual(2);
});