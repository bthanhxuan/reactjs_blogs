import API from './api';

const commentService = {
  getList({ page = 1, per_page = 5, post = null, parent = 0 }) {
    return API.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
      },
    });
  },
};

export default commentService;
