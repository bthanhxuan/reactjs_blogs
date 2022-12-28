import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchArticlesGeneralAsync } from '../../store/post/actions';
import ArticleItem from '../ArticleItem';
import Button from '../shared/Button';
import MainTitle from '../shared/MainTitle';

function ArticleGeneral() {
  const posts = useSelector((state) => state.POST.articlesGeneral.list);
  const currentPage = useSelector(
    (state) => state.POST.articlesGeneral.currentPage
  );
  const totalPages = useSelector(
    (state) => state.POST.articlesGeneral.totalPages
  );

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const hasMorePost = currentPage < totalPages;

  useEffect(() => {
    dispatch(actFetchArticlesGeneralAsync(1));
  }, [dispatch]);

  function handleLoadmore() {
    if (loading) return; //ngăn việc double click từ ng dùng
    setLoading(true);
    dispatch(actFetchArticlesGeneralAsync(currentPage + 1)).then(() => {
      setLoading(false);
    });
  }

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
        <div className="text-center">
          {hasMorePost && (
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleLoadmore}
            >
              Tải thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
