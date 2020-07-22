import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Lobby from '../../components/Interview/Lobby';
import Code from '../../components/Interview/Code';
import { finishInterview } from '../../state/actions/interviewActions';
import {VideoChat} from './Interview'

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
     it('VideoChat Component renders', () => {
      const wrapper = shallow(<VideoChat user={"jose@jose.com"} idRole={1}/>)
      expect(wrapper.length).toBe(1)

   })
    


})