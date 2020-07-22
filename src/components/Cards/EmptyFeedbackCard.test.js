import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyFeedbackCard from './EmptyFeedbackCard'



Enzyme.configure({adapter:new Adapter()});

describe(' EmptyFeedbackCard component ', () => {
 
    it('EmptyFeedbackCard component renders', () => {
        const wrapper = shallow(<EmptyFeedbackCard/>)
        expect(wrapper.length).toBe(1)
 
     })
    


})