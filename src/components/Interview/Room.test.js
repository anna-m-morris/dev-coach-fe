import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Room from './Room'


Enzyme.configure({adapter:new Adapter()});

describe('Room component', () => {

     it('Room Component is rendering', () => {
        const wrapper = shallow(<Room/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Room Component is using and ID ', () => {
        const wrapper = shallow(<Room/>)
        const text = wrapper.find('#alert-dialog-description').text();
        expect(text).toBe('Are you sure you want to end your interview? You will be not able to come back to your session.')

    
    })



})