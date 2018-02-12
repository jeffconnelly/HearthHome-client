import { createStore, applyMiddleware } from 'redux';
import cardReducer from './reducers/card-reducer';
import userReducer from './reducers/user-reducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  form: formReducer,
  cardReducer: cardReducer, 
  userReducer: userReducer
})

export default createStore(reducers,
applyMiddleware(thunk));

