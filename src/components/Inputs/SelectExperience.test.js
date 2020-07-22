import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectExperience from './SelectExperience'


Enzyme.configure({adapter:new Adapter()});

describe('SelectExperience component', () => {

     it('SelectExperience Component is rendering', () => {
        const wrapper = shallow(<SelectExperience/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('SelectExperience Component is using a classname ', () => {
        const wrapper = shallow(<SelectExperience/>)
        const text = wrapper.find('.makeStyles-inputLabel-2').text();
        expect(text).toBe('Experience')

    
    })


})