import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GiveRating from './GiveRating'


Enzyme.configure({adapter:new Adapter()});

describe('GiveRating Component', () => {


     it('GiveRating Component is rendering', () => {
        const wrapper = shallow(<GiveRating/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('GiveRating Component should get labels rating through classname', () => {
        const wrapper = shallow(<GiveRating/>)
        const text = wrapper.find('.makeStyles-rating-1').text();
        expect(text).toBe("Ok")
     })




})