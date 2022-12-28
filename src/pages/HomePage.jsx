import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticleGeneral from '../components/ArticleGeneral';
import ArticleLatest from '../components/ArticleLatest';
import ArticlePopular from '../components/ArticlePopular';
import {
  actFetchArticlesGeneralAsync,
  actFetchArticlesLatestAsync,
  actFetchArticlesPopularAsync,
} from '../store/post/actions';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchArticlesLatestAsync());
    dispatch(actFetchArticlesPopularAsync());
    dispatch(actFetchArticlesGeneralAsync());
  }, [dispatch]);

  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;
