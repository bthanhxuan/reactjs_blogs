import API from './api';

const postService = {
  getAll(inputParams = {}) {
    return API.call().get('/wp/v2/posts', {
      params: {
        ...inputParams,
        lang: 'vi',
      },
    });
  },
  getArticlesLatest() {
    return this.getAll({ per_page: 3, page: 1 });
  },
  getArticlesPopular() {
    return this.getAll({ per_page: 3, page: 1, orderby: 'post-views' });
  },
  getArticlesPaging(page = 1, extraParam) {
    return this.getAll({ page, ...extraParam });
  },
  getArticleDetail(slug) {
    return this.getAll({ slug });
  },
  getArticlesRelated(author, exclude) {
    return this.getAll({ per_page: 3, page: 1, author, exclude });
  },
};

export default postService;
