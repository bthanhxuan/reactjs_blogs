import { mappingCommentData } from '../../helper';
import commentService from '../../service/comment';

//action type
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT';
export const ACT_FETCH_COMMENTS_CHILD = 'ACT_FETCH_COMMENTS_CHILD';
export const ACT_FETCH_NEW_COMMENTS = 'ACT_FETCH_NEW_COMMENTS';

// action creator
export function actFetchCommentsParent({
  comments,
  totalPages,
  total,
  currentPage,
}) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      comments,
      totalPages,
      total,
      currentPage,
    },
  };
}

export function actFetchCommentsChild({
  comments,
  total,
  totalPages,
  currentPage,
  parent,
}) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      comments,
      total,
      totalPages,
      currentPage,
      parent,
    },
  };
}

export function actFetchNewComments(comment) {
  return {
    type: ACT_FETCH_NEW_COMMENTS,
    payload: {
      comment,
    },
  };
}

//action async
export function actFetchCommentsParentAsync({
  page = 1,
  post = null,
  parent = 0,
}) {
  return async (dispatch) => {
    const response = await commentService.getList({
      page,
      per_page: 5,
      post,
      parent,
    });
    const data = response.data;
    const comments = data.map(mappingCommentData);
    // console.log('comments', comments);
    const totalPages = parseInt(response.headers['x-wp-totalpages']);
    const total = parseInt(response.headers['x-wp-total']);
    dispatch(
      actFetchCommentsParent({ comments, totalPages, total, currentPage: page })
    );
  };
}

export function actFetchCommentsChildAsync({
  page = 1,
  post = null,
  parent = 0,
}) {
  return async (dispatch) => {
    const response = await commentService.getList({
      page,
      per_page: 3,
      post,
      parent,
    });
    const comments = response.data.map(mappingCommentData);
    console.log('actFetchCommentsChildAsync - comments', comments);
    const total = parseInt(response.headers['x-wp-total']);
    const totalPages = parseInt(response.headers['x-wp-totalpages']);
    dispatch(
      actFetchCommentsChild({
        comments,
        total,
        totalPages,
        currentPage: page,
        parent,
      })
    );
  };
}

export function actFetchNewCommentsAsync({
  authorId,
  content,
  postId,
  parentId = 0,
}) {
  return async (dispatch) => {
    try {
      const response = await commentService.addNewItem({
        authorId,
        content,
        postId,
        parentId,
      });
      // console.log('actFetchNewCommentsAsync', response);
      const newComments = mappingCommentData(response.data);
      dispatch(actFetchNewComments(newComments));
    } catch (error) {}
  };
}
