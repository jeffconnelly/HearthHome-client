import React from 'react';
import { shallow, mount } from 'enzyme';
import { SavedDecks } from '../components/saved-decks';
import '../setupTests';


describe('<SavedDecks />', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( <SavedDecks /> );
    });
  });