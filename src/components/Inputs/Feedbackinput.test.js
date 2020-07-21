import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Feedbackinput from './FeedbackInput'


Enzyme.configure({adapter:new Adapter()});

describe('FeedbackinputComponent', () => {

     it('Feedbackinput Component is rendering', () => {
        const wrapper = shallow(<Feedbackinput/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Feedbackinput Component is using a classname ', () => {
        const wrapper = shallow(<Feedbackinput/>)
        const text = wrapper.find('.makeStyles-root-1').text();
        expect(text).toBe('')
    
    })


})