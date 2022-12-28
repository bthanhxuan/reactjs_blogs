import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import categoryReducer from './category/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
  CATEGORY: categoryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
