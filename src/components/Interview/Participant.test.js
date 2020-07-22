import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Participant from './Participant'


Enzyme.configure({adapter:new Adapter()});

describe('Participant component', () => {

     it('Participant Component is rendering', () => {
        const wrapper = shallow(<Participant/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Participant Component is using classnames ', () => {
        const wrapper = shallow(<Participant/>)
        const text = wrapper.find('.participant-video-container').text();
        expect(text).toBe('')

    
    })



})