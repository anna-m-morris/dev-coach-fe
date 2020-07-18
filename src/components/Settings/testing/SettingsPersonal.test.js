import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '@material-ui/core/Avatar';


Enzyme.configure({adapter:new Adapter()});

describe('Settings Personal', () => {
    it('Settings personal is getting avatars ', () => {
       const wrapper = shallow(<Avatar/>)
       expect(wrapper.length).toBe(1)

    })
})