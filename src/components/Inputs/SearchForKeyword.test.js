import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForKeyword from './SearchForKeyword'


Enzyme.configure({adapter:new Adapter()});

describe('SearchForKeyword component', () => {

     it('SearchForKeyword Component is rendering', () => {
        const wrapper = shallow(<SearchForKeyword/>)
        expect(wrapper.length).toBe(1)
 
     })

     it('SearchForKeyword Component is using a classname ', () => {
        const wrapper = shallow(<SearchForKeyword/>)
        const text = wrapper.find('.iconDiv').text();
        expect(text).toBe('')
    
    })


})