import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer'
import { FooterContainer } from './Footer-styles';


Enzyme.configure({adapter:new Adapter()});

describe('footer component', () => {
    it('footer component renders', () => {
       const wrapper = shallow(<Footer/>)
       expect(wrapper.length).toBe(1)

    })

    it('footer component show text for copyright', () => {
        const wrapper = shallow(<Footer/>)
        const text = wrapper.find('.footer-copyright');
       expect(text.text()).toBe('Copyright © 2020 DevCoach')
 
     })
     it('footer component show text for tribute', () => {
        const wrapper = shallow(<Footer/>)
        const text = wrapper.find('.footer-tribute');
       expect(text.text()).toBe(" Labs PT10 ")
 
     })

     it('footer has FooterContainer styling', () => {
        const wrapper = shallow(<FooterContainer/>)
        expect(wrapper.length).toBe(1)
 
     })
})