import {
  ACT_FETCH_ARTICLES_GENERAL,
  ACT_FETCH_ARTICLES_LATEST,
  ACT_FETCH_ARTICLES_POPULAR,
  ACT_FETCH_ARTICLES_RELATED,
  ACT_FETCH_ARTICLES_SEARCH,
  ACT_FETCH_ARTICLE_DETAIL,
} from './actions';

const initState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesGeneral: {
    list: [],
    currentPage: 1,
    totalPages: 1,
  },
  articlesSearch: {
    list: [],
    currentPage: 1,
    totalPages: 1,
  },
  articleDetail: null,
  articlesRelated: [],
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
      return {
        ...state,
        articlesGeneral: {
          list:
            action.payload.page === 1
              ? action.payload.posts
              : [...state.articlesGeneral.list, ...action.payload.posts],
          currentPage: action.payload.page,
          totalPages: action.payload.totalPages,
        },
      };

    case ACT_FETCH_ARTICLES_SEARCH:
      return {
        ...state,
        articlesSearch: {
          list:
            action.payload.page === 1
              ? action.payload.posts
              : [...state.articlesSearch.list, ...action.payload.posts],
          currentPage: action.payload.page,
          totalPages: action.payload.totalPages,
        },
      };

    case ACT_FETCH_ARTICLE_DETAIL:
      return {
        ...state,
        articleDetail: action.payload.post,
      };

    case ACT_FETCH_ARTICLES_RELATED:
      return {
        ...state,
        articlesRelated: action.payload.posts,
      };

    default:
      return state;
  }
}

export default reducer;
