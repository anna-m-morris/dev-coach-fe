import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';
import Search from './Search/Search';
import How from './How/How';
import Testimonials from './Testimonials/Testimonial';
import AboutContainer from './AboutStyles';

Enzyme.configure({adapter:new Adapter()});

describe('About Component', () => {
    it('About Component should have search how and testimonial components', () => {
       const wrapper = shallow(<About/>)
       const text = wrapper.find('.aboutContainer');
       expect(text.text()).toBe("<Search /><How /><Testimonial />")
    })

    it('About Component is rendering Search component', () => {
        const wrapper = shallow(<Search/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('About Component is rendering How component', () => {
        const wrapper = shallow(<How/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('About Component is rendering Testimonials component', () => {
        const wrapper = shallow(<Testimonials/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('About Component is is using styling from the AboutContainer', () => {
        const wrapper = shallow(<AboutContainer/>)
        expect(wrapper.length).toBe(1)
 
     })


})

