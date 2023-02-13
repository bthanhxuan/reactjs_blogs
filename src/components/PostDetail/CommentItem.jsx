import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchCommentsChildAsync } from '../../store/comment/actions';
import CommentForm from './CommentForm';

function CommentItem(props) {
  const dispatch = useDispatch();
  const postId = useSelector((state) => state.POST.articleDetail.id);
  const { comment } = props;
  const { id, authorName, authorAvatar, pubDate, content, replyCount } =
    comment;
  // console.log(comment);

  const commentsPaging = useSelector(
    (state) => state.COMMENT.commentsChildData[id] || {}
  );
  const { list: comments, currentPage, totalPage, total } = commentsPaging;

  let restTotal = total - 3 * currentPage;
  if (isNaN(restTotal)) restTotal = replyCount;

  const [isShowForm, setIsShowForm] = useState(false);

  function handleLoadMore(evt) {
    evt.preventDefault();
    dispatch(
      actFetchCommentsChildAsync({
        page: currentPage ? currentPage + 1 : 1,
        post: postId,
        parent: id,
      })
    );
  }

  function handleToogleCommentForm() {
    setIsShowForm(!isShowForm);
  }

  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/">
            <img src={authorAvatar || '/assets/images/avatar1.jpg'} alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {authorName}
          </a>
          <p className="comments__section--time">{pubDate}</p>
          <div
            className="comments__section--text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <i
            className="ion-reply comments__section--reply"
            onClick={handleToogleCommentForm}
          ></i>
        </div>
      </div>
      {/* Reply Comments */}
      {comments && comments.length > 0 && (
        <ul className="comments">
          {comments.map((commentChild) => (
            <CommentItem key={commentChild.id} comment={commentChild} />
          ))}
        </ul>
      )}
      {/* Reply form */}
      <CommentForm parentId={id} isShow={isShowForm} />
      {restTotal > 0 && (
        <div className="comments__hidden">
          <a href="/" onClick={handleLoadMore}>
            <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả
            lời
          </a>
        </div>
      )}
    </li>
  );
}

export default CommentItem;
