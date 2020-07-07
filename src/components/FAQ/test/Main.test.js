import React from 'react';
import { mount,configure } from 'enzyme';
import { MemoryRouter } from 'react-router';
import General from '../GeneralFaq';
import Profile from '../ProfileFaq';
import Payment from '../PaymentFaq';
import Main from '../Main';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()})
test('invalid path for General should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries = { ['/anyRoute']}>
      <Main />
    </MemoryRouter>
  );

  expect(wrapper.find(General)).toHaveLength(0)

  
})

configure({adapter: new Adapter()});
test('invalid path for profile should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries = { ['/anyRoute']}>
      <Main />
    </MemoryRouter>
  );

  expect(wrapper.find(Profile)).toHaveLength(0)

  
})

configure({adapter: new Adapter()});
test('invalid path for Payment should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries = { ['/anyRoute']}>
      <Main />
    </MemoryRouter>
  );

  expect(wrapper.find(Payment)).toHaveLength(0)
  

  
})


