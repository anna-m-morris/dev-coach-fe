import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rating from '../DataVisualization/Rating';

Enzyme.configure({adapter:new Adapter()});

describe(' CoachCard component ', () => {
 
    it('CoachCard component uses Rating', () => {
        const wrapper = shallow(<Rating/>)
        expect(wrapper.length).toBe(1)
 
     })
    

})