import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducer';
import logger from './middleware/logger';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(logger)),
);

export default store;
