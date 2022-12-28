export default function ArticleItemAvatar({ authorAvatar, authorName }) {
  return (
    <div className="article-item__author-image">
      <a aria-label="John Doe" href="/">
        {authorAvatar ? (
          <img src={authorAvatar} alt={authorName} />
        ) : (
          <img src="assets/images/john-doe.png" alt="john-doe" />
        )}
      </a>
    </div>
  );
}
