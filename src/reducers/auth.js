import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
} from '../actions/auth';

const initialState = {
  authToken: null, 
  currentUser: null,
  loading: false,
  error: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
   case SET_AUTH_TOKEN: 
      return  {
          ...state,
          authToken: action.authToken
      }
    case CLEAR_AUTH:
      return {
          ...state,
          authToken: null,
          currentUser: null
      }
    case AUTH_REQUEST:
      return {
          ...state,
          loading: true,
          error: null
      }
    case AUTH_SUCCESS: 
      return {
          ...state,
          loading: false,
          currentUser: action.currentUser
      } 
    case AUTH_ERROR:
      return {
          ...state,
          loading: false,
          error: action.error
      }
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
      }
      default: return state;
  }
}
  