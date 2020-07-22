import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingFaq from '../LandingFaq'


Enzyme.configure({adapter:new Adapter()});

describe('LandingFaq Component', () => {


     it('LandingFaq Component is rendering', () => {
        const wrapper = shallow(<LandingFaq/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('LandingFaq is rendering <MainFaq />', () => {
        const wrapper = shallow(<LandingFaq/>)

        const text = wrapper.text();
        expect(text).toBe('<MainFaq />')
     })

  
})