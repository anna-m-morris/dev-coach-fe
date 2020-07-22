import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Testimonial from './Testimonial'

Enzyme.configure({adapter:new Adapter()});

describe(' Testimonial component ', () => {
 
    it('Testimonial component should have h1', () => {
        const wrapper = shallow(<Testimonial/>)
        const text = wrapper.find('h1').text();
        expect(text).toBe("Customer Testimonials")
 
     })

     it('Testimonial component should have h3', () => {
        const wrapper = shallow(<Testimonial/>)
        const text = wrapper.find('h3').first().text();
        expect(text).toBe("John Davidson")
 
     })

     it('Testimonial component should have h3', () => {
        const wrapper = shallow(<Testimonial/>)
        const text = wrapper.find('p').first().text();
        expect(text).toBe("DevCoach definitely played a role in my performance. Nothing beats mock coding interveiws. I still remember my first coding interveiw a few years back...")
 
     })

    


})