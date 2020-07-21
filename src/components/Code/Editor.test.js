import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Editor from './Editor'

Enzyme.configure({adapter:new Adapter()});

describe(' Editor component ', () => {
 
    it('Editor component is Rendering', () => {
        const wrapper = shallow(<Editor/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Editor component contains Controlled from react codemirro2', () => {
        const wrapper = shallow(<Editor/>)
        const text = wrapper.text();
        expect(text).toBe('<Controlled />')
     })
    


})