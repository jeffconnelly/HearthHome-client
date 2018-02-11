import { createStore, applyMiddleware } from 'redux';
import cardReducer from './reducers/card-reducer';
import thunk from 'redux-thunk';
// import {reducer as formReducer} from 'redux-form'



export default createStore(cardReducer, applyMiddleware(thunk));

