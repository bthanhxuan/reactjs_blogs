import categoryService from '../../service/service';

// actions type
export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';

// actions creator
export function actFetchAllCategories(categories) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      categories,
    },
  };
}

// actions async
export function actFetchAllCategoriesAsync() {
  return async (dispatch) => {
    const response = await categoryService.getAll();
    const data = response.data;
    const categories = {};
    data.forEach((category) => {
      categories[category.id] = {
        id: category.id,
        name: category.name,
        slug: category.slug,
      };
    });
    // console.log('categories', categories);
    dispatch(actFetchAllCategories(categories));
  };
}
