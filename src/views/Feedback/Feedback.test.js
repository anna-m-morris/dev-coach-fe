import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from 'antd/lib/pagination';
import ConnectedFeedback, {Feedback} from './Feedback';
import configureStore from 'redux-mock-store'




Enzyme.configure({adapter:new Adapter()});

describe(' Feedback component ', () => {
    it('Feedback component uses pagination', () => {
       const wrapper = shallow(<Pagination/>)
       expect(wrapper.length).toBe(1)

    })

    it('Feedback component is rendering', () => {
        const wrapper = shallow(<Feedback/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('Feedback has a feedBack Title', () => {
        const wrapper = shallow(<Feedback/>)
        const text = wrapper.find('.feedback-title').text();
        expect(text).toBe('Interview Feedback')
 
     })

     
     it('Feedback has a <EmptyFeedback /> rendering', () => {
        const wrapper = shallow(<Feedback/>)
        const text = wrapper.find('.feedback-card-container').text();
        expect(text).toBe('<EmptyFeedback />')
 
     })

    
  
})