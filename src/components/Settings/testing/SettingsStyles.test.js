import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styled from 'styled-components';



Enzyme.configure({adapter:new Adapter()});

describe('Settings Styles component ', () => {
    it('Settings styles is using styled component sucessfully ', () => {
       const wrapper = shallow(<styled/>)
       expect(wrapper.length).toBe(1)

    })
})