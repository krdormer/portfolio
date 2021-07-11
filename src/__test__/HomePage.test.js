import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../pages/home-page/home-page.component';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<HomePage />);
})

it('contains an h1 with class intro-title', () => {
    expect(wrapper.find('.intro-title').hasClass('intro-title')).toEqual(true);
});

it('contains 2 p tags with class intro-text', () => {
    expect(wrapper.find('.intro-detail').length).toEqual(2);
});