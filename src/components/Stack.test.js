import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from './Stack';
import { stack } from '../data/fixtures'
const props={ stack };
describe('Stack', () => {
    const stack = shallow(<Stack {...props} />)
    it("render the title", () => {
        expect(stack.find('h3').text()).toEqual(props.stack.title)
    })
    it("render the link title", () => {
        expect(stack.find('Link h4').text()).toEqual("Home")
    })
    it("render the length of cards", () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    })
})