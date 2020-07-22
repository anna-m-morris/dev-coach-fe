import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Terminal from './Terminal';
import styled from 'styled-components';

Enzyme.configure({adapter:new Adapter()});

describe(' Terminal component ', () => {
 
 
     it('Terminal component is rendering', () => {
        const wrapper = shallow(<Terminal/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Terminal component is rendering', () => {
        const wrapper = shallow(<styled/>)
        expect(wrapper.length).toBe(1)
 
     })

    


})