import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StyledSettings from '../SettingsStyles';


Enzyme.configure({adapter:new Adapter()});

describe('Settings General component', () => {
    it('Settings General is styling', () => {
       const wrapper = shallow(<StyledSettings/>)
       expect(wrapper.length).toBe(1)

    })
})