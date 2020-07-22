import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDashboardConnected, {UserDashboard} from './UserDashboard';
import devices from '../../utils/devices';


Enzyme.configure({adapter:new Adapter()});

describe('UserDashboard component', () => {
    it('UserDashboardConnected is rendering', () => {
       const wrapper = shallow(<UserDashboardConnected/>)
        expect(wrapper.length).toBe(1)

    })
    it('User Dashboard is Getting devices', () => {
        const wrapper = shallow(<devices/>)
         expect(wrapper.length).toBe(1)
 
     })

     it('User Dashboard is rendering', () => {
        const wrapper = shallow(<UserDashboard user={"jose"}/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('User Dashboard has a data className', () => {
        const wrapper = shallow(<UserDashboard user={"jose"}/>)
        const text = wrapper.find('.data').first().text();
        expect(text).toBe("0")
 
     })

     it('User Dashboard has a data className', () => {
        const wrapper = shallow(<UserDashboard user={"jose"}/>)
        const text = wrapper.find('h2').text();
        expect(text).toBe("Scheduled Interviews")
 
     })
})