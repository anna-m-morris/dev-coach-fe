import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashboard from './UserDashboard';
import devices from '../../utils/devices';


Enzyme.configure({adapter:new Adapter()});

describe('UserDashboard component', () => {
    it('User Dashboard is rendering', () => {
       const wrapper = shallow(<UserDashboard/>)
        expect(wrapper.length).toBe(1)

    })
    it('User Dashboard is Getting devices', () => {
        const wrapper = shallow(<devices/>)
         expect(wrapper.length).toBe(1)
 
     })
})