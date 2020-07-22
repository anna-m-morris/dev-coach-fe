import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyAppoimentCard from './EmptyAppointmentCard'



Enzyme.configure({adapter:new Adapter()});

describe(' EmptyAppoimentCard component ', () => {
 
    it('EmptyAppoimentCard component renders', () => {
        const wrapper = shallow(<EmptyAppoimentCard/>)
        expect(wrapper.length).toBe(1)
 
     })
    


})