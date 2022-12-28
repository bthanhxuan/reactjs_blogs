import {
  ACT_FETCH_ARTICLES_GENERAL,
  ACT_FETCH_ARTICLES_LATEST,
  ACT_FETCH_ARTICLES_POPULAR,
} from './actions';

const initState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesGeneral: [],
  currentPage: 0,
  totalPages: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state,
        articlesLatest: action.payload.posts,
      };

    case ACT_FETCH_ARTICLES_POPULAR:
      return {
        ...state,
        articlesPopular: action.payload.posts,
      };

    case ACT_FETCH_ARTICLES_GENERAL:
      const page = action.payload.page;
      return {
        ...state,
        articlesGeneral:
          page === 1
            ? action.payload.posts
            : [...state.articlesGeneral, ...action.payload.posts],
        currentPage: page,
        totalPages: action.payload.totalPages,
      };

    default:
      return state;
  }
}

export default reducer;
