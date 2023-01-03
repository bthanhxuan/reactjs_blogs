import API from './api';

const menuService = {
  getAll(inputParam) {
    return API.call().get('/menus/v1/menus/main-menu-vi', {
      params: {
        ...inputParam,
      },
    });
  },
};

export default menuService;
