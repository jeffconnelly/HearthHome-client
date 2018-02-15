import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../components/header';
import '../setupTests';


describe('<Header />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <Header /> );
    });
  });