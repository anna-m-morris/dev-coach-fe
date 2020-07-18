import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SettingsTabs from './SettingsTabs';
import { SettingsPersonal } from '../../components/Settings/SettingsPersonal';

import {
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
  } from '../../state/actions/notificationActions';
  import notification from '../../components/Notifications/Notification';

Enzyme.configure({adapter:new Adapter()});

describe(' SettingsTabs component ', () => {
  
    it('SettingsTabs component uses SettingsPersonal component', () => {
        const wrapper = shallow(<SettingsPersonal/>)
        expect(wrapper.length).toBe(1)
 
     })


     it('SettingsTabs component uses showErrorMessage action', () => {
        const wrapper = shallow(<showErrorMessage/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('SettingsTabs component uses showSuccessMessage action', () => {
        const wrapper = shallow(<showSuccessMessage/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('SettingsTabs component uses closeMessage action', () => {
        const wrapper = shallow(<closeMessage/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('SettingsTabs component uses Notification action', () => {
        const wrapper = shallow(<notification/>)
        expect(wrapper.length).toBe(1)
 
     })



    


})