import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Datepicker from './DatePicker'
import TimePicker from './TimePicker';
import moment from 'moment';
import Calendar from 'antd/lib/calendar';

Enzyme.configure({adapter:new Adapter()});

describe(' Date picker component ', () => {
 
    it('Date picker renders', () => {
        const wrapper = shallow(<Datepicker/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Date picker uses time picker component', () => {
        const wrapper = shallow(<TimePicker/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('Date picker uses moment', () => {
        const wrapper = shallow(<moment/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('Date picker uses Calendar', () => {
        const wrapper = shallow(<Calendar/>)
        expect(wrapper.length).toBe(1)
 
     })

    


})