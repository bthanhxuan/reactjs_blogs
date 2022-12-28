import {
  ACT_FETCH_ARTICLES_LATEST,
  ACT_FETCH_ARTICLES_PAGING,
  ACT_FETCH_ARTICLES_POPULAR,
  ACT_FETCH_ARTICLES_RELATED,
  ACT_FETCH_ARTICLE_DETAIL,
} from './actions';

const initState = {
  articlesLatest: [],
  articlesPopular: [],
  articlesPaging: {
    list: [],
    currentPage: 1,
    totalPages: 1,
    total: 0,
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

    case ACT_FETCH_ARTICLES_PAGING:
      return {
        ...state,
        articlesPaging: {
          list:
            action.payload.page === 1
              ? action.payload.posts
              : [...state.articlesPaging.list, ...action.payload.posts],
          currentPage: action.payload.page,
          totalPages: action.payload.totalPages,
          total: action.payload.total,
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
