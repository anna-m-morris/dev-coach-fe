import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledSettings from '../SettingsStyles';
import {SettingsGeneral} from  '../SettingsGeneral'


Enzyme.configure({adapter:new Adapter()});

describe('Settings General component', () => {
    it('Settings General is styling', () => {
       const wrapper = shallow(<StyledSettings/>)
       expect(wrapper.length).toBe(1)

    })

    it('Settings General is rendering', () => {
        const wrapper = shallow(<SettingsGeneral user={"jose"}/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Settings General is rendering paper classname', () => {
        const wrapper = shallow(<SettingsGeneral user={"jose"}/>)
        const text = wrapper.find('.paper').text();
        expect(text).toBe("CancelSave Changes")
 
     })

     it('Settings General is rendering button classname', () => {
        const wrapper = shallow(<SettingsGeneral user={"jose"}/>)
        const text = wrapper.find('.button').text();
        expect(text).toBe("CancelSave Changes")
 
     })
})