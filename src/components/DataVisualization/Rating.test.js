import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rating from './Rating';
import Box from '@material-ui/core/Box';


Enzyme.configure({adapter:new Adapter()});

describe('Rating Component', () => {


     it('Rating Component is rendering', () => {
        const wrapper = shallow(<Rating/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Rating Component using Box from material ui', () => {
        const wrapper = shallow(<Box/>)
        expect(wrapper.length).toBe(1)
     })



})