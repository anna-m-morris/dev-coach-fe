import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPrice from '../../components/Inputs/SelectPrice';
import SelectExperience from '../../components/Inputs/SelectExperience';
import SearchForKeyword from '../../components/Inputs/SearchForKeyword';
import devices from '../../utils/devices';
import styled from 'styled-components';



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

    


})