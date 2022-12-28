import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';

const rootReducer = combineReducers({
  POST: postReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
