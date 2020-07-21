import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPrice from './SelectExperience'


Enzyme.configure({adapter:new Adapter()});

describe('SelectPrice component', () => {

     it('SelectPrice Component is rendering', () => {
        const wrapper = shallow(<SelectPrice/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('SelectPrice Component is using a classname ', () => {
        const wrapper = shallow(<SelectPrice/>)
        const text = wrapper.find('.makeStyles-inputLabel-2').text();
        expect(text).toBe('Experience')

    
    })


})