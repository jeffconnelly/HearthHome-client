import {
  SHOW_LOGIN_FORM
} from '../actions/useractions'

const initialState = {
  showLoginForm: false,
  userLoggedIn: false,
};

// case SHOW_LOGIN_FORM:
// return {
//   ...state,
//   ShowLoginForm: true
// }

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
