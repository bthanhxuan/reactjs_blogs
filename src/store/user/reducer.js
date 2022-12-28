import { ACT_LOGIN } from './actions';

const initState = {
  token: localStorage.getItem('ACCESS_TOKEN'),
  currentUser: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      const token = action.payload.token;
      localStorage.setItem('ACCESS_TOKEN', token);
      return {
        ...state,
        token: token,
        currentUser: action.payload.currentUser,
      };

    default:
      return state;
  }
}

export default reducer;
