import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({adapter:new Adapter()});

describe(' Appointment component ', () => {
 
    it('Appointment component uses mapExperience mapper', () => {
        const wrapper = shallow(<mapExperience/>)
        expect(wrapper.length).toBe(1)
 
     })
    


})