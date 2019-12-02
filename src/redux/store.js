import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducers from './reducer';
import logger from './middleware/logger';

const store = createStore(rootReducers, devToolsEnhancer(applyMiddleware(logger)));

export default store;
