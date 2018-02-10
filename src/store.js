import { createStore, applyMiddleware } from 'redux';
import cardReducer from './reducers/card-reducer';
import thunk from 'redux-thunk';


export default createStore(cardReducer, applyMiddleware(thunk));

