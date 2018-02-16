import React from 'react';
import { shallow, mount } from 'enzyme';
import  Input from '../components/input';
import '../setupTests';


describe('<Input />', () => {
  it('Should smoke test the Input component', () => {
    shallow(<Input meta={{touched: false}} input={{name: 'input'}} /> );
    });
  });