import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import SearchContainer from './SearchStyle';


Enzyme.configure({adapter:new Adapter()});

describe('Search Component', () => {


    it('Search Component should have a H1 tag', () => {
        const wrapper = shallow(<Search/>)
        const text = wrapper.find('h1').text();
        expect(text).toBe('One-On-One Coaching')
     })

     it('Search Component should have a H2 tag', () => {
        const wrapper = shallow(<Search/>)
        const text = wrapper.find('h2').text();
        expect(text).toBe('Live chat, code along, interveiw practice, and more')
     })

     it('Search Component should have a H2 tag', () => {
        const wrapper = shallow(<Search/>)
        const text = wrapper.find('p').text();
        expect(text).toBe('From beginners making a splash in the industry to senior engineers, our coaches are ready to help you level up your skills.')
     })

     it('Search Component is using styling from the SearchContainer', () => {
        const wrapper = shallow(<SearchContainer/>)
        expect(wrapper.length).toBe(1)
 
     })




})