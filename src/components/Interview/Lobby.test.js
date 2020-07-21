import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Lobby from './Lobby'


Enzyme.configure({adapter:new Adapter()});

describe('Lobby component', () => {

     it('Lobby Component is rendering', () => {
        const wrapper = shallow(<Lobby/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Lobby Component is using an H2 ', () => {
        const wrapper = shallow(<Lobby/>)
        const text = wrapper.find('h2').text();
        expect(text).toBe('Enter your interview')

    
    })

    it('Lobby Component is using a form ', () => {
        const wrapper = shallow(<Lobby/>)
        const text = wrapper.find('form').text();
        expect(text).toBe('Enter your interviewStart interview')

    
    })


})