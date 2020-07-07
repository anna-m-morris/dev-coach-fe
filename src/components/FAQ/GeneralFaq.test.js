import React from 'react';
import General from './GeneralFaq';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow,configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureMockStore();
import * as actionCreators from '../../state/actions/faqActions';
import ReactDom from 'react-dom'


configure({adapter: new Adapter()})
const store = mockStore({actionCreators});
describe ('General FAQ tab', ()=> {

    it('renders' ,() => {
        const component = shallow (<Provider store={store}>
        <actionCreators/>
        </Provider>);
        expect(component).toHaveLength(1)
    })


})

it('renders without crashing', ()=> {
    const div = document.createElement('div')
    const generalRendered = ReactDom.render(<General/>, div)

    const component = shallow (<Provider store={store}>
        <actionCreators/>
        <generalRendered/>
        </Provider>);

    console.log(component)

})

  

