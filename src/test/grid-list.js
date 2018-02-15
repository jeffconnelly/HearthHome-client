import React from 'react';
import { shallow, mount } from 'enzyme';
import { GridList } from '../components/grid-list';
import '../setupTests';


describe('<GridList />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <GridList /> );
    });
  });