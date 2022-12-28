// import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function ArticleItemCategories({ categoriesId }) {
  const categories = useSelector((state) => state.CATEGORY.listCategory);

  return (
    <ul className="article-item__categories">
      {categories &&
        categoriesId.map((categoryId) => {
          // const categoryFound = categories.find((item) => item.id === categoryId);
          const categoryFound = categories[categoryId];
          // console.log('categoryFound', categoryFound);
          return (
            <li key={categoryId}>
              <a href="/" className="btn btn-category">
                {categoryFound.name}
              </a>
            </li>
          );
        })}
    </ul>
  );
}
