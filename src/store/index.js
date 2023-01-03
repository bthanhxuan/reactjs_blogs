import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import userReducer from './user/reducer';
import menuReducer from './menu/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  CATEGORY: categoryReducer,
  USER: userReducer,
  MENU: menuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
