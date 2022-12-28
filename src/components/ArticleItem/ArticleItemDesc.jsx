export default function ArticleItemDesc({ desc }) {
  let customizeDesc = desc.replace('<p>', '');
  customizeDesc = customizeDesc.replace('</p>', '');
  customizeDesc = customizeDesc.split(' ').slice(0, 20).join(' ') + '...';
  return <p className="article-item__desc">{customizeDesc}</p>;
}
