import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';

Enzyme.configure({adapter:new Adapter()});

describe('Dashboard component', () => {
    it('Dashboard renders', () => {
       const wrapper = shallow(<Dashboard/>)
        expect(wrapper.length).toBe(1)

    })
})
