// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({ thumb, title }) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        <img src={thumb} alt={title} />
      </a>
    </div>
  );
}
