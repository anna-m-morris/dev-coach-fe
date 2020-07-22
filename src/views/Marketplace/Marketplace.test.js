import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPrice from '../../components/Inputs/SelectPrice';
import SelectExperience from '../../components/Inputs/SelectExperience';
import SearchForKeyword from '../../components/Inputs/SearchForKeyword';
import devices from '../../utils/devices';
import styled from 'styled-components';
import {Marketplace} from './Marketplace'



Enzyme.configure({adapter:new Adapter()});

describe(' Marketplace component ', () => {


    it('Marketplace component is using SelectPrice component', () => {
        const wrapper = shallow(<SelectPrice/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Marketplace component is using SelectExperience component', () => {
        const wrapper = shallow(<SelectExperience/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('Marketplace component is using SearchForKeyword component', () => {
        const wrapper = shallow(<SearchForKeyword/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Marketplace component is using SearchForKeyword component', () => {
        const wrapper = shallow(<devices/>)
        expect(wrapper.length).toBe(1)
 
     })

     
     it('Marketplace component is using Style component', () => {
        const wrapper = shallow(<styled/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Marketplace component is using Style component', () => {
      const wrapper = shallow(<Marketplace/>)
      expect(wrapper.length).toBe(1)

   })

   it('Marketplace component is rendering', () => {
      const wrapper = shallow(<Marketplace/>)
      expect(wrapper.length).toBe(1)

   })

   it('Marketplace component has a classname', () => {
      const wrapper = shallow(<Marketplace/>)
      const text = wrapper.find('.coaches').text();
      expect(text).toBe('')


   })

   it('Marketplace component has a 2nd classname', () => {
      const wrapper = shallow(<Marketplace/>)
      const text = wrapper.find('.pagination').text();
      expect(text).toBe('<Pagination />')


   })

   it('.marketplace-container should have 4 components rendering', () => {
      const wrapper = shallow(<Marketplace/>)
      const text = wrapper.find('.marketplace-container').text();
      expect(text).toBe('<SelectPrice /><SearchForKeyword /><SelectExperience /><Pagination />')


   })

    


})