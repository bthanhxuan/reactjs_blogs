import API from './api';

const commentService = {
  getList({ page = 1, per_page = 5, post = null, parent = 0, exclude = [] }) {
    return API.call().get('/wp/v2/comments', {
      params: {
        per_page,
        page,
        post,
        parent,
        order: 'asc',
        exclude,
      },
    });
  },
  addNewItem({ authorId, content, postId, parentId = 0 }) {
    return API.callWithToken().post('/wp/v2/comments', {
      author: authorId,
      content,
      post: postId,
      parent: parentId,
    });
  },
};

export default commentService;
