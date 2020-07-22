import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Terminal from './Terminal'


Enzyme.configure({adapter:new Adapter()});

describe('Terminal component', () => {

     it('Terminal Component is rendering', () => {
        const wrapper = shallow(<Terminal/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Terminal empty string', () => {
        const wrapper = shallow(<Terminal/>)
        expect(wrapper.text()).toBe('')
 
     })



})