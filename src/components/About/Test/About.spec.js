import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import How from '../How/How';
import Search from '../Search/Search';
import Testimonial from '../Testimonials/Testimonial';


test('renders search component', () => {
  const app = rtl.render(<Search />);
  const firstLine = app.getByText(/one-on-one coaching/i);
  const lastLine = app.getByText(
    /coaches are ready to help you level up your skills/i,
  );
  expect(firstLine).toBeVisible();
  expect(lastLine).toBeVisible();
});

test('renders how component', () => {
  const app = rtl.render(<How />);
  const firstLine = app.getByText(/how does devcoach work/i);
  const lastLine = app.getByText(
    /search for coaches based on the skills you want to improve/i,
  );
  expect(firstLine).toBeVisible();
  expect(lastLine).toBeVisible();
});

test('renders testimonials component', () => {
  const app = rtl.render(<Testimonial />);
  const firstLine = app.getByText(/customer testimonials/i);
  const lastLine = app.getByText(
    /so i scheduled a couple of devcoach interviews/i,
  );
  expect(firstLine).toBeVisible();
  expect(lastLine).toBeVisible();
});

