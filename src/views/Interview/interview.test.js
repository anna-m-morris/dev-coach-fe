import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Lobby from '../../components/Interview/Lobby';
import Code from '../../components/Interview/Code';
import { finishInterview } from '../../state/actions/interviewActions';

Enzyme.configure({adapter:new Adapter()});

describe(' Interview component ', () => {
  
    it('Interview Component uses Lobby component', () => {
        const wrapper = shallow(<Lobby/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Interview Component uses finishInterview action', () => {
        const wrapper = shallow(<finishInterview/>)
        expect(wrapper.length).toBe(1)
 
     })

     


})