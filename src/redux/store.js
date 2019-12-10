import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducer';
import logger from './middleware/logger';

const composeEnhancers = composeWithDevTools(applyMiddleware(logger));

const store = createStore(
  rootReducers,
  composeEnhancers,
);

export default store;