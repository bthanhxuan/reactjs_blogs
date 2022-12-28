import { mappingPostData } from '../../helper';
import postService from '../../service/post';

// actions type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_GENERAL = 'ACT_FETCH_ARTICLES_GENERAL';
export const ACT_FETCH_ARTICLES_SEARCH = 'ACT_FETCH_ARTICLES_SEARCH';
export const ACT_FETCH_ARTICLE_DETAIL = 'ACT_FETCH_ARTICLE_DETAIL';
export const ACT_FETCH_ARTICLES_RELATED = 'ACT_FETCH_ARTICLES_RELATED';

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

export function actFetchArticlesSearch(posts, page, totalPages) {
  return {
    type: ACT_FETCH_ARTICLES_SEARCH,
    payload: {
      posts,
      page,
      totalPages,
    },
  };
}

export function actFetchArticleDetail(post) {
  return {
    type: ACT_FETCH_ARTICLE_DETAIL,
    payload: {
      post,
    },
  };
}

export function actFetchArticlesRelated(posts) {
  return {
    type: ACT_FETCH_ARTICLES_RELATED,
    payload: {
      posts,
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

export function actFetchArticlesSearchAsync(search, page = 1) {
  return async (dispatch) => {
    const response = await postService.getArticlesSearch(search, page);
    const data = response.data;
    const posts = data.map(mappingPostData);
    const totalPages = response.headers['x-wp-totalpages'];
    dispatch(actFetchArticlesSearch(posts, page, totalPages));
  };
}

export function actFetchArticleDetailAsync(slug) {
  return async (dispatch) => {
    const response = await postService.getArticleDetail(slug);
    const post = mappingPostData(response.data[0]);
    dispatch(actFetchArticleDetail(post));
    const resRelated = await postService.getArticlesRelated(
      post.authorId,
      post.id
    );
    const postsRelated = resRelated.data.map(mappingPostData);
    dispatch(actFetchArticlesRelated(postsRelated));
  };
}
