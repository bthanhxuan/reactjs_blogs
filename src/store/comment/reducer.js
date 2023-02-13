import {
  ACT_ADD_COMMENTS_CHILD,
  ACT_FETCH_COMMENTS_CHILD,
  ACT_FETCH_COMMENTS_PARENT,
  ACT_FETCH_NEW_COMMENTS,
} from './actions';

const initState = {
  commentsPaging: {
    list: [],
    exclude: [],
    currentPage: 1,
    totalPages: 1,
    total: 0,
  },
  commentsChildData: {},
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_ADD_COMMENTS_CHILD:
      const newComment = action.payload.comment;
      const parentId = newComment.parent;
      return {
        ...state,
        commentsChildData: {
          ...state.commentsChildData,
          [parentId]: {
            list: state.commentsChildData[parentId]
              ? [newComment, ...state.commentsChildData[parentId].list]
              : [newComment],
          },
        },
      };

    case ACT_FETCH_COMMENTS_PARENT:
      return {
        ...state,
        commentsPaging: {
          ...state.commentsPaging,
          list:
            action.payload.currentPage === 1
              ? action.payload.comments
              : [...state.commentsPaging.list, ...action.payload.comments],
          currentPage: action.payload.currentPage,
          totalPages: action.payload.totalPages,
          total: action.payload.total,
        },
      };

    case ACT_FETCH_COMMENTS_CHILD:
      return {
        ...state,
        commentsChildData: {
          ...state.commentsChildData,
          [action.payload.parent]: {
            list:
              action.payload.currentPage === 1
                ? action.payload.comments
                : [
                    ...state.commentsChildData[action.payload.parent].list,
                    ...action.payload.comments,
                  ],
            currentPage: action.payload.currentPage,
            totalPages: action.payload.totalPages,
            total: action.payload.total,
          },
        },
      };

    case ACT_FETCH_NEW_COMMENTS:
      return {
        ...state,
        commentsPaging: {
          ...state.commentsPaging,
          list: [action.payload.comment, ...state.commentsPaging.list],
          exclude: [...state.commentsPaging.exclude, action.payload.comment.id],
        },
      };

    default:
      return state;
  }
}

export default reducer;
