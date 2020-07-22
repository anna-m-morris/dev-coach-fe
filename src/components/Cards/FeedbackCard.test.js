import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styled from 'styled-components';

Enzyme.configure({adapter:new Adapter()});

describe(' FeedbackCard component ', () => {
 
    it('FeedbackCard component uses styled component', () => {
        const wrapper = shallow(<styled/>)
        expect(wrapper.length).toBe(1)
 
     })
    


})