import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header'
import { HeaderContainer } from './Header-styles';


Enzyme.configure({adapter:new Adapter()});

describe('Header component', () => {
    it('Header component renders', () => {
       const wrapper = shallow(<Header/>)
       expect(wrapper.length).toBe(1)

    })

    it('Header component show text for .cta-title', () => {
        const wrapper = shallow(<Header/>)
        const text = wrapper.find('.cta-title');
       expect(text.text()).toBe(`Code, advice, interveiw practice? There's a mentor for that`)
 
     })
     it('Header component show text for Sign Up', () => {
        const wrapper = shallow(<Header/>)
        const text = wrapper.find('.cta-button');
       expect(text.text()).toBe(`Sign Up`)
 
     })

     it('Header component is using header Container styling', () => {
        const wrapper = shallow(<HeaderContainer/>)
        expect(wrapper.length).toBe(1)
 
     })

 
})