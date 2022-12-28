import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import MainTitle from '../components/shared/MainTitle';
import { usePostPaging } from '../hooks/usePostPaging';
import { actFetchArticlesPagingAsync } from '../store/post/actions';

function SearchPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const keyword = urlParams.get('keyword');

  const dispatch = useDispatch();
  const params = {
    extraParam: { per_page: 1, search: keyword },
  };
  const { posts, showButtonLoadMore, total } = usePostPaging(params);

  useEffect(() => {
    dispatch(actFetchArticlesPagingAsync(1, params.extraParam));
  }, [keyword, dispatch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {total} kết quả tìm kiếm với từ khóa "{keyword}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {posts.map((post) => (
            <div className="tcl-col-12 tcl-col-md-8" key={post.id}>
              <ArticleItem
                isStyleCard
                isShowCategoies
                isShowAvatar={false}
                isShowDesc={false}
                post={post}
              />
            </div>
          ))}
        </div>

        {showButtonLoadMore()}
      </div>
    </div>
  );
}

export default SearchPage;
