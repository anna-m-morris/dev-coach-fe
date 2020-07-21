import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../Main'


Enzyme.configure({adapter:new Adapter()});

describe('Main Component', () => {


     it('Main Component is rendering', () => {
        const wrapper = shallow(<Main/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Main Component should have FAQ as H2', () => {
        const wrapper = shallow(<Main/>)
        const text = wrapper.find('h2').text();
        expect(text).toBe('FAQ')
     })

     it('Main Component should Gneral as first h3', () => {
        const wrapper = shallow(<Main/>)
        const text = wrapper.find('h3').first().text();
        expect(text).toBe('General')
     })

         

  
})