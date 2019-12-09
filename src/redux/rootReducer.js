import { combineReducers } from 'redux';
import { budgetReducer, expenseReducer } from './budgetApp/reducer';

const rootReducers = combineReducers({
    budgetReducer,
    expenseReducer,
  });
  
  export default rootReducers;