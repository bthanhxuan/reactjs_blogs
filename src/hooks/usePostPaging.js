import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/shared/Button';
import { actFetchArticlesPagingAsync } from '../store/post/actions';

export function usePostPaging({ extraParam = {} }) {
  const posts = useSelector((state) => state.POST.articlesPaging.list);
  const currentPage = useSelector(
    (state) => state.POST.articlesPaging.currentPage
  );
  const totalPages = useSelector((state) => state.POST.articlesPaging.total);
  const total = useSelector((state) => state.POST.articlesPaging.total);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const hasMorePost = currentPage < totalPages;

  function handleLoadmore() {
    if (loading) return; //ngăn việc double click từ ng dùng
    setLoading(true);
    dispatch(actFetchArticlesPagingAsync(currentPage + 1, extraParam)).then(
      () => {
        setLoading(false);
      }
    );
  }

  function showButtonLoadMore() {
    return (
      hasMorePost && (
        <div className="text-center">
          <Button
            type="primary"
            size="large"
            loading={loading}
            onClick={handleLoadmore}
          >
            Tải thêm
          </Button>
        </div>
      )
    );
  }

  return {
    showButtonLoadMore,
    posts,
    total,
  };
}
