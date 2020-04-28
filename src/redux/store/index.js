import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import logger from '../middleware/logger';
import generateId from '../middleware/generateId';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, generateId))
);

// dev only!
window.store = store;

export default store;
