import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Logo } from '../Landing-styles';
import { NavContainer } from './NavigationStyles';



Enzyme.configure({adapter:new Adapter()});

describe('Navigation component', () => {
  

     it('Navigation has NavContainer styling', () => {
        const wrapper = shallow(<NavContainer/>)
        expect(wrapper.length).toBe(1)
 
     })

     
     it('Navigation has Logo', () => {
        const wrapper = shallow(<Logo/>)
        expect(wrapper.length).toBe(1)
 
     })

})