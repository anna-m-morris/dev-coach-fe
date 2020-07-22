import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '@material-ui/core/Avatar';
import {SettingsPersonal} from '../SettingsPersonal'




Enzyme.configure({adapter:new Adapter()});

describe('Settings Personal', () => {
    it('Settings personal is rendering ', () => {
       const wrapper = shallow(<SettingsPersonal/>)
       expect(wrapper.length).toBe(1)

    })

    it('<Upload /> is rendering ', () => {
        const wrapper = shallow(<SettingsPersonal/>)
        const text = wrapper.find('.image-container').text();
        expect(text).toBe("<Upload />")
 
     })


     it('.form is rendering  CancelSave Changes', () => {
        const wrapper = shallow(<SettingsPersonal/>)
        const text = wrapper.find('.form').text();
        expect(text).toBe("CancelSave Changes")
 
     })

    it('Settings personal is getting avatars ', () => {
        const wrapper = shallow(<Avatar/>)
        expect(wrapper.length).toBe(1)
 
     })
})