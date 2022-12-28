import API from './api';

const postService = {
  getArticlesLatest() {
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 3,
        page: 1,
        lang: 'vi',
      },
    });
  },
  getArticlesPopular() {
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 3,
        page: 1,
        orderby: 'post-views',
        lang: 'vi',
      },
    });
  },
  getArticlesGeneral(page = 1) {
    return API.call().get('/wp/v2/posts', {
      params: {
        per_page: 2,
        page,
        lang: 'vi',
      },
    });
  },
};

export default postService;
