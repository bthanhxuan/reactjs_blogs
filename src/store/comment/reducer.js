import { ACT_FETCH_COMMENTS_PARENT } from './actions';

const initState = {
  commentsPaging: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    total: 0,
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...state,
        commentsPaging: {
          list:
            action.payload.currentPage === 1
              ? action.payload.comments
              : [...state.commentsPaging.list, ...action.payload.comments],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          total: action.payload.total,
        },
      };
    default:
      return state;
  }
}

export default reducer;
