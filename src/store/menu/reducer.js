import { ACT_GET_MENUS } from './actions';

const initState = {
  menus: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_MENUS:
      return {
        ...state,
        menus: action.payload.menus,
      };

    default:
      return state;
  }
}
