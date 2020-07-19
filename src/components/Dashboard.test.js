import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';
import logo from '../img/firelogo.png';

Enzyme.configure({adapter:new Adapter()});

describe('Dashboard component', () => {
    it('Dashboard renders', () => {
       const wrapper = shallow(<Dashboard/>)
       expect(wrapper.length).toBe(1)

    })
    it('Dashboard has a logo', () => {
        const wrapper = shallow(<Dashboard/>)
         expect(logo).toBe(logo)
 
     })
})
