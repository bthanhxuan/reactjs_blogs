import { mappingMenuData } from '../../helper';
import menuService from '../../service/menu';

export const ACT_GET_MENUS = 'ACT_GET_MENUS';

export function actGetMenus(menus) {
  return {
    type: ACT_GET_MENUS,
    payload: {
      menus,
    },
  };
}

export function actGetMenusAsync() {
  return async (dispatch) => {
    const response = await menuService.getAll({});
    const menus = response.data.items.map(mappingMenuData);
    dispatch(actGetMenus(menus));
  };
}
