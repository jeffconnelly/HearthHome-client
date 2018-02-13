import {
  SHOW_LOGIN_FORM
} from '../actions/useractions'

const initialState = {
  showLoginForm: false,
  userLoggedIn: false,
};

export function userReducer(state=initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
    return {
      ...state,
      showLoginForm: true,
      userLoggedIn: false
    }
    default: return state;
  }
}

export default userReducer;
