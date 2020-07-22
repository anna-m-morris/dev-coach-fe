import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './CoachModal'


Enzyme.configure({adapter:new Adapter()});

describe('CoachModal component', () => {
    it('CoachModal component is rendering', () => {
       const wrapper = shallow(<App coach={"jose"}/>)
        expect(wrapper.length).toBe(1)

    })
    it('CoachModal component is showing .seemore classname text', () => {
        const wrapper = shallow(<App coach={"jose"}/>)
        const text = wrapper.find('.see-more').text();
        expect(text).toBe('See more')

 
     })

})