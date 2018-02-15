import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from '../components/app';
import '../setupTests';


describe('<App />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <App /> );
    });
  });