import React from 'react';
import { shallow, mount } from 'enzyme';
import { Modal } from '../components/modal';
import '../setupTests';


describe('<Modal />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <Modal /> );
    });
  });