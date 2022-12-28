import { useSelector } from 'react-redux';
import ArticleItem from '../ArticleItem';
import MainTitle from '../shared/MainTitle';
import './latest-news-list.css';

function ArticleLatest() {
  const posts = useSelector((state) => state.POST.articlesLatest);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle>Bài viết mới nhất</MainTitle>

        <div className="latest-news__list spacing">
          {posts.map((post) => (
            <div key={post.id} className="latest-news__card">
              <ArticleItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
