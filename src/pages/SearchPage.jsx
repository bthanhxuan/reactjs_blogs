import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ArticleItem from '../components/ArticleItem';
import Button from '../components/shared/Button';
import MainTitle from '../components/shared/MainTitle';
import { actFetchArticlesSearchAsync } from '../store/post/actions';

function SearchPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const keyword = urlParams.get('keyword');
  const currentPage = useSelector(
    (state) => state.POST.articlesSearch.currentPage
  );
  const totalPages = useSelector(
    (state) => state.POST.articlesSearch.totalPages
  );

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const hasMorePost = currentPage < totalPages;

  const posts = useSelector((state) => state.POST.articlesSearch.list);

  useEffect(() => {
    dispatch(actFetchArticlesSearchAsync(keyword, 1));
  }, [keyword, dispatch]);

  function handleLoadmore() {
    if (loading) return; //ngăn việc double click từ ng dùng
    setLoading(true);
    dispatch(actFetchArticlesSearchAsync(keyword, currentPage + 1)).then(() => {
      setLoading(false);
    });
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          10 kết quả tìm kiếm với từ khóa "{keyword}"
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

export default SearchPage;
