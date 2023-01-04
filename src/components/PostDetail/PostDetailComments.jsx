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

  function handleLoadMore(e) {
    e.preventDefault();
    dispatch(
      actFetchCommentsParentAsync({ post: postId, page: currentPage + 1 })
    );
  }

  return (
    <div className="post-detail__comments">
      <div className="comments__form">
        <CommentForm />
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div>
      <p>20 Comments</p>
      {/* Comment from API */}
      <ul className="comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
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
