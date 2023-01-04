import React from 'react';
import CommentForm from './CommentForm';

function CommentItem(props) {
  const { comment } = props;
  const { id, authorName, authorAvatar, pubDate, content, replyCount } =
    comment;
  // console.log(comment);
  let commentContent = content.replace('<p>', '');
  commentContent = commentContent.replace('</p>', '');
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
          <p className="comments__section--text">{commentContent}</p>
          {/* <i class="ion-reply comments__section--reply"></i> */}
        </div>
      </div>
      {/* Reply Comments */}
      {/* <ul className="comments">
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar3.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit?
              </p>
              <i class="ion-reply comments__section--reply"></i>
            </div>
          </div>
        </li>
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar4.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sequi odit exercitationem ma?
              </p>
              <i class="ion-reply comments__section--reply"></i>
            </div>
          </div>
        </li>
      </ul> */}
      {/* Reply form */}
      {/* <CommentForm/> */}
    </li>
  );
}

export default CommentItem;
