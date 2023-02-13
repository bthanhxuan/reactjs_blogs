import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchNewCommentsAsync } from '../../store/comment/actions';

import Button from '../shared/Button';

function CommentForm(props) {
  const { parentId, isShow = true } = props;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const currentUser = useSelector((state) => state.USER.currentUser);
  const postId = useSelector((state) => state.POST.articleDetail?.id);

  const dispatch = useDispatch();

  if (!isShow) return <></>;

  if (!currentUser) {
    return (
      <p>
        Vui lòng <Link to="/login">đăng nhập</Link> để bình luận!
      </p>
    );
  }

  function handleChangeValue(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    setLoading(true);

    const data = {
      authorId: currentUser.id,
      content,
      postId,
      parentId,
    };
    // console.log(data);
    dispatch(actFetchNewCommentsAsync(data)).then((res) => {
      setLoading(false);
    });
  }

  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="/">
            <img src="/assets/images/avatar1.jpg" alt="" />
          </a>
        </div>
        <textarea
          onChange={handleChangeValue}
          placeholder="Viết bình luận..."
        />
      </div>
      <div className="text-right">
        <Button as="button" loading={loading} onClick={handleSubmit}>
          Bình luận
        </Button>
      </div>
    </div>
  );
}

export default CommentForm;
