import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Landing2 from './Landing-2'


Enzyme.configure({adapter:new Adapter()});

describe('Landing2 component', () => {

     it('Landing2 Component is rendering', () => {
        const wrapper = shallow(<Landing2/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Landing2 Component should have <Header />', () => {
        const wrapper = shallow(<Landing2/>)
        const text = wrapper.find('.cta-container').text();
        expect(text).toBe('<Header />')

 
     })


})