import { mappingPostData } from '../../helper';
import postService from '../../service/post';

// actions type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_GENERAL = 'ACT_FETCH_ARTICLES_GENERAL';

// actions creator
export function actFetchArticlesLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLES_LATEST,
    payload: {
      posts,
    },
  };
}

export function actFetchArticlesPopular(posts) {
  return {
    type: ACT_FETCH_ARTICLES_POPULAR,
    payload: {
      posts,
    },
  };
}

export function actFetchArticlesGeneral(posts, page, totalPages) {
  return {
    type: ACT_FETCH_ARTICLES_GENERAL,
    payload: {
      posts,
      page,
      totalPages,
    },
  };
}

// actions async
export function actFetchArticlesLatestAsync() {
  return async (dispatch) => {
    const response = await postService.getArticlesLatest();
    const data = response.data;
    const posts = data.map(mappingPostData);
    dispatch(actFetchArticlesLatest(posts));
  };
}

export function actFetchArticlesPopularAsync() {
  return async (dispatch) => {
    const response = await postService.getArticlesPopular();
    const data = response.data;
    const posts = data.map(mappingPostData);
    dispatch(actFetchArticlesPopular(posts));
  };
}

export function actFetchArticlesGeneralAsync(page = 1) {
  return async (dispatch) => {
    const response = await postService.getArticlesGeneral(page);
    const data = response.data;
    const posts = data.map(mappingPostData);
    const totalPages = response.headers['x-wp-totalpages'];
    dispatch(actFetchArticlesGeneral(posts, page, totalPages));
  };
}
