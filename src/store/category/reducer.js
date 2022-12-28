import { ACT_FETCH_ALL_CATEGORIES } from './actions';

const initState = {
  listCategory: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        listCategory: action.payload.categories,
      };

    default:
      return state;
  }
}

export default reducer;
