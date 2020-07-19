import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledBooking from './BookingStyles';


Enzyme.configure({adapter:new Adapter()});

describe(' Booking component ', () => {
  
    it('Booking component use Editor component', () => {
        const wrapper = shallow(<StyledBooking/>)
        expect(wrapper.length).toBe(1)
 
     })
  

})