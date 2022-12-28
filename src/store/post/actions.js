import { mappingPostData } from '../../helper';
import postService from '../../service/post';

// actions type
export const ACT_FETCH_ARTICLES_LATEST = 'ACT_FETCH_ARTICLES_LATEST';
export const ACT_FETCH_ARTICLES_POPULAR = 'ACT_FETCH_ARTICLES_POPULAR';
export const ACT_FETCH_ARTICLES_PAGING = 'ACT_FETCH_ARTICLES_PAGING';
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

export function actFetchArticlesPaging(posts, page, totalPages, total) {
  return {
    type: ACT_FETCH_ARTICLES_PAGING,
    payload: {
      posts,
      page,
      totalPages,
      total,
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

export function actFetchArticlesPagingAsync(page = 1, extraParam = {}) {
  return async (dispatch) => {
    const response = await postService.getArticlesPaging(page, extraParam);
    const data = response.data;
    const posts = data.map(mappingPostData);
    const totalPages = response.headers['x-wp-totalpages'];
    const total = response.headers['x-wp-total'];
    dispatch(actFetchArticlesPaging(posts, page, totalPages, total));
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
