import { ACCESS_TOKEN } from '../../constants';
import { ACT_LOGIN, ACT_LOGOUT } from './actions';

const initState = {
  token: localStorage.getItem(ACCESS_TOKEN),
  currentUser: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      const token = action.payload.token;
      localStorage.setItem(ACCESS_TOKEN, token);
      return {
        ...state,
        token: token,
        currentUser: action.payload.currentUser,
      };

    case ACT_LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        ...state,
        token: null,
        currentUser: null,
      };

    default:
      return state;
  }
}

export default reducer;
