import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Team from "./Team"
Enzyme.configure({adapter:new Adapter()});
describe('Team Component', () => {
    it('display title', () => {
       const wrapper = shallow(<Team/>)
       const text = wrapper.find('.title');
       expect(text.text()).toBe('Meet The Team')
    })
})
