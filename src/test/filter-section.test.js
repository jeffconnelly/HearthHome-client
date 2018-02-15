import React from 'react';
import { shallow, mount } from 'enzyme';
import { FilterSection } from '../components/filter-section';
import '../setupTests';


describe('<FilterSection />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <FilterSection /> );
    });
  });