import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Code from './Code';
import Editor from '../../components/Code/Editor';


Enzyme.configure({adapter:new Adapter()});

describe(' code component ', () => {
    it('code component to have a a .code header container class', () => {
       const wrapper = shallow(<Code/>)
       const text = wrapper.find('.code-header-container');
       expect(text.text()).toBe("")

    })

    it('code component use Editor component', () => {
        const wrapper = shallow(<Editor/>)
        expect(wrapper.length).toBe(1)
 
     })

    


})