import { combineReducers } from 'redux';
import { budgetReducer, expenseReducer } from './budgetApp/reducer';

const rootReducers = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
  });
  
  export default rootReducers;