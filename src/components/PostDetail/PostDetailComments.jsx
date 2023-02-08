import { useDispatch, useSelector } from 'react-redux';
import { actFetchCommentsParentAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import './comments.css';

function PostDetailComments() {
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.POST.articleDetail.id);
  const commentsPaging = useSelector((state) => state.COMMENT.commentsPaging);
  const { list: comments, totalPages, total, currentPage } = commentsPaging;

  const restTotal = total - 5 * currentPage;

  function handleLoadMore(evt) {
    evt.preventDefault();
    dispatch(
      actFetchCommentsParentAsync({ page: currentPage + 1, post: postId })
    );
  }

  return (
    <div className="post-detail__comments">
      <CommentForm parentId={0} />
      <p>{total} Comments</p>
      {comments && comments.length > 0 && (
        <ul className="comments">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      )}

      {restTotal > 0 && (
        <div className="comments__hidden parent">
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả
            lời
          </a>
        </div>
      )}
    </div>
  );
}

export default PostDetailComments;
