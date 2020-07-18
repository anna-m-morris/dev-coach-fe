import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import How from './How';
import HowSyles from './HowStyles'

Enzyme.configure({adapter:new Adapter()});

describe('How component', () => {
 
    it(' How component has a title class', () => {
        const wrapper = shallow(<How/>)
        const text = wrapper.find('.title');
        expect(text.text()).toBe("How does DevCoach work?")
 
     })

     it('How component uses HowStyles', () => {
        const wrapper = shallow(<HowSyles/>)
        expect(wrapper.length).toBe(1)
 
     })
    


})