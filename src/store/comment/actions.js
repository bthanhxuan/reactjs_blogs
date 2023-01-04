import { mappingCommentData } from '../../helper';
import commentService from '../../service/comment';

//action type
export const ACT_FETCH_COMMENTS_PARENT = 'ACT_FETCH_COMMENTS_PARENT';

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
