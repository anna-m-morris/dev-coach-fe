import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Testimonial from './Testimonial'

Enzyme.configure({adapter:new Adapter()});

describe(' Testimonial component ', () => {
 
    it('Testimonial component renders', () => {
        const wrapper = shallow(<Testimonial/>)
        expect(wrapper.length).toBe(1)
 
     })

    


})