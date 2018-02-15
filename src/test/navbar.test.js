import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavBar } from '../components/navbar';
import '../setupTests';


describe('<NavBar />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <NavBar /> );
    });
  });