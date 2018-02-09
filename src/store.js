import { createStore, applyMiddleware } from 'redux';
//Import reducer
import thunk from 'redux-thunk';


export default createStore(reducerHere, applyMiddleware(thunk));

