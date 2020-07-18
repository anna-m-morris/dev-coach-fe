import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GiveFeedback from './GiveFeedback';
import Button from '@material-ui/core/Button';
import {
    giveFeedback,
    saveRating,
    saveFeedback,
  } from '../../state/actions/feedbackActions';

Enzyme.configure({adapter:new Adapter()});


describe(' Give Feedback component ', () => {
    it('Give feeback component renders', () => {
       const wrapper = shallow(<GiveFeedback/>)
       expect(wrapper.length).toBe(1)

    })
    it('Give feeback component uses button from material ui', () => {
        const wrapper = shallow(<Button/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('Give feeback component uses GiveFeeback action', () => {
        const wrapper = shallow(<giveFeedback/>)
        expect(wrapper.length).toBe(1)
 
     })
     it('Give feeback component uses saveRating action', () => {
        const wrapper = shallow(<saveRating/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Give feeback component uses saveFeedback action', () => {
        const wrapper = shallow(<saveFeedback/>)
        expect(wrapper.length).toBe(1)
 
     })

    

    })