import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePostPaging } from '../../hooks/usePostPaging';
import { actFetchArticlesPagingAsync } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {
  const dispatch = useDispatch();
  const params = {
    extraParam: { per_page: 2 },
  };
  const { posts, showButtonLoadMore } = usePostPaging(params);

  useEffect(() => {
    dispatch(actFetchArticlesPagingAsync(1, params.extraParam));
  }, [dispatch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {posts.map((post) => (
            <div key={post.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard isShowAvatar={false} post={post} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        {showButtonLoadMore()}
      </div>
    </div>
  );
}

export default ArticleGeneral;
